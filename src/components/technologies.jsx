import { FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiOpenjdk, SiVite } from "react-icons/si";

const techIcons = [FaReact, SiTailwindcss, SiOpenjdk, SiVite, FaNodeJs, FaGithub, FaPython];

export default function Technologies() {
  return (
    <section className="w-full bg-black py-5 px-0">
      <div className="overflow-hidden">
        <div className="flex animate-tech-scroll py-6">
          {[...techIcons, ...techIcons].map((Icon, i) => (
            <Icon key={i} size={60} className="mx-12 text-white flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  );
}
