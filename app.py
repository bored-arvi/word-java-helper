from flask import Flask, request, send_file
import os

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():
    question_file = request.files.get("questionFile")
    java_files = request.files.getlist("javaFiles")

    os.makedirs("uploads", exist_ok=True)
    question_path = os.path.join("uploads", question_file.filename)
    question_file.save(question_path)

    java_paths = []
    for f in java_files:
        path = os.path.join("uploads", f.filename)
        f.save(path)
        java_paths.append(path)

    # Call your Python orchestrator here
    # final_report_path = run_orchestrator(question_path, java_paths)
    final_report_path = "output/final_report.docx"  # placeholder

    return send_file(final_report_path, as_attachment=True)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
