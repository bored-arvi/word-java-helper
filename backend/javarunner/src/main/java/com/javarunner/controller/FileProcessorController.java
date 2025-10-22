package com.javarunner.controller;

import com.javarunner.service.FileProcessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.*;

@RestController
@RequestMapping("/api")
public class FileProcessorController {
    private final FileProcessorService fileProcessorService;

    @Autowired
    public FileProcessorController(FileProcessorService fileProcessorService) {
        this.fileProcessorService = fileProcessorService;
    }

    @PostMapping("/process")
    public ResponseEntity<FileSystemResource> processFiles(@RequestParam("files") MultipartFile[] files) throws Exception {
        String wordFileName = fileProcessorService.processFiles(files);
        FileSystemResource resource = new FileSystemResource(wordFileName);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + Paths.get(wordFileName).getFileName())
                .body(resource);
    }
}
