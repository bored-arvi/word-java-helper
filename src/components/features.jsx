import React from "react";

const features = [
  { title: "Auto Report Generation", desc: "Generate formatted Word reports instantly." },
  { title: "Code Execution", desc: "Runs your Java code and captures output." },
  { title: "Easy Integration", desc: "Simple to integrate into any workflow." }
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-8 py-20">
      {features.map((f, idx) => (
        <div key={idx} 
             className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-white shadow-lg transition hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-16 h-1 bg-white/30"></div>
        <div className="absolute top-0 left-0 w-1 h-16 bg-white/30"></div>
          <h3 className="text-2xl font-heading mb-4">{f.title}</h3>
          <p className="text-gray-300">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
