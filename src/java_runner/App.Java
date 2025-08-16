import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import javax.imageio.ImageIO;

public class RunnerScreenshot {
    public static void main(String[] args) {
        JFrame frame = null;
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.print("Enter Java file name (without .java): ");
            String fileName = br.readLine().trim();
            Process compile = Runtime.getRuntime().exec("javac " + fileName + ".java");
            compile.waitFor();

            if (compile.exitValue() != 0) {
                System.out.println("Compilation failed!");
                printStream(compile.getErrorStream());
                return;
            }
            Process run = Runtime.getRuntime().exec("java " + fileName);
            BufferedReader input = new BufferedReader(new InputStreamReader(run.getInputStream()));
            BufferedReader error = new BufferedReader(new InputStreamReader(run.getErrorStream()));
            StringBuilder outputBuilder = new StringBuilder();
            String line;
            while ((line = input.readLine()) != null) {
                outputBuilder.append(line).append("\n");
            }
            while ((line = error.readLine()) != null) {
                outputBuilder.append(line).append("\n");
            }

            run.waitFor();
            String programOutput = outputBuilder.toString();
            System.out.println("Program Output:\n" + programOutput);
            frame = new JFrame("Program Output");
            JTextArea textArea = new JTextArea(programOutput);
            textArea.setFont(new Font("Monospaced", Font.PLAIN, 16));
            textArea.setEditable(false);
            frame.add(new JScrollPane(textArea));
            frame.setSize(600, 400);
            frame.setVisible(true);
            Thread.sleep(1000);
            BufferedImage image = new BufferedImage(frame.getWidth(), frame.getHeight(), BufferedImage.TYPE_INT_RGB);
            Graphics2D g2d = image.createGraphics();
            frame.paint(g2d);
            g2d.dispose();
            ImageIO.write(image, "png", new File(fileName+"_output.png"));
            System.out.println("Screenshot saved as output_screenshot.png");
            Thread.sleep(1000);
            frame.dispose();
            System.exit(0);

        } catch (Exception e) {
            e.printStackTrace();
            if (frame != null) frame.dispose();
        }
    }

    private static void printStream(InputStream is) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(is));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
    }
}
