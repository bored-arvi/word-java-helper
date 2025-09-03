import {useRef} from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-start h-screen text-left px-8">
      <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-8xl text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
        Javord
      </h1>
      <p className="font-body text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
        Upload your question file and Java solutions to automatically generate
        a combined Word report with formatted code and execution screenshots.
      </p>
      <UploadButton />
    </section>
  );
}
function UploadButton() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // trigger hidden input
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    for (const file of files) {
      console.log("File:", file.name, "Path:", file.webkitRelativePath);
    }
  };

  return (
    <div>
      {/* Styled button */}
      <button
        className="font-heading bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition transform hover:scale-110 hover:shadow-xl duration-300"
        onClick={handleClick}
      >
        Upload Now
      </button>

      {/* Hidden input for folder selection */}
      <input
        type="file"
        webkitdirectory="true"
        directory=""
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
