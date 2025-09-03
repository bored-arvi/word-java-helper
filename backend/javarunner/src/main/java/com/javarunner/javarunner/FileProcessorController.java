package com.javarunner.fileprocessor;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.apache.poi.xwpf.usermodel.*;

import java.io.*;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class FileProcessorController {

    private final String UPLOAD_DIR = "uploads";
    private final String OUTPUT_DIR = "outputs";

    @PostMapping("/process")
    public ResponseEntity<FileSystemResource> processFiles(@RequestParam("files") MultipartFile[] files) throws Exception {

        // Ensure directories exist
        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);

        Path outputPath = Paths.get(OUTPUT_DIR);
        if (!Files.exists(outputPath)) Files.createDirectories(outputPath);

        // Create Word document
        String wordFileName = OUTPUT_DIR + "/Result_" + UUID.randomUUID() + ".docx";
        XWPFDocument doc = new XWPFDocument();

        for (MultipartFile file : files) {
            Path filePath = uploadPath.resolve(file.getOriginalFilename());
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Compile and run Java file
            Process compile = new ProcessBuilder("javac", filePath.toString()).start();
            compile.waitFor();

            String className = file.getOriginalFilename().replace(".java", "");
            Process run = new ProcessBuilder("java", "-cp", UPLOAD_DIR, className)
                    .redirectErrorStream(true)
                    .start();

            StringBuilder output = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(run.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    output.append(line).append("\n");
                }
            }
            run.waitFor();

            // Add results to Word
            XWPFParagraph para = doc.createParagraph();
            XWPFRun runText = para.createRun();
            runText.setText("File: " + file.getOriginalFilename());
            runText.addBreak();
            runText.setText("Output:\n" + output);
            runText.addBreak();
        }

        // Write Word doc
        try (FileOutputStream fos = new FileOutputStream(wordFileName)) {
            doc.write(fos);
        }
        doc.close();

        // Return Word file
        FileSystemResource resource = new FileSystemResource(wordFileName);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + Paths.get(wordFileName).getFileName())
                .body(resource);
    }
}
