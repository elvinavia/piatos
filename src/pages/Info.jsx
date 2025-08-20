import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiVercel } from "react-icons/si";

export default function Info() {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" size="40" />, name: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" size="40" />, name: "CSS" },
    { icon: <FaJs color="#F7DF1E" size="40" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" size="40" />, name: "React" },
    { icon: <SiTailwindcss color="#38BDF8" size="40" />, name: "Tailwind" },
    { icon: <SiNextdotjs color="#fff" size="40" />, name: "Next.js" },
    { icon: <FaNodeJs color="#68A063" size="40" />, name: "Node.js" },
    { icon: <SiMongodb color="#47A248" size="40" />, name: "MongoDB" },
    { icon: <FaGitAlt color="#F05032" size="40" />, name: "Git" },
    { icon: <FaGithub color="#181717" size="40" />, name: "GitHub" },
    { icon: <SiVercel color="#000000" size="40" />, name: "Vercel" },
  ];

  return (
    <div className="page">
      <h1 className="center">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
