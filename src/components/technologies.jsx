import { FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiOpenjdk, SiVite } from "react-icons/si";


const techIcons = [FaReact, SiTailwindcss, SiOpenjdk, SiVite, FaNodeJs, FaGithub, FaPython];

export default function Technologies() {
  return (
    <section className="w-full overflow-hidden py-8 relative">
      {/* Conveyor Belt */}
      <div className="flex animate-tech-scroll">
        {[...techIcons, ...techIcons].map((Icon, i) => (
          <Icon key={i} size={80} className="mx-12 text-white flex-shrink-0" />
        ))}
      </div>
    </section>
  );
}
