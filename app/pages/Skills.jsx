import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const skills = [
  { name: "HTML", img: "/assets/html.svg" },
  { name: "CSS", img: "/assets/css.svg" },
  { name: "JavaScript", img: "/assets/js.svg" },
  { name: "React", img: "/assets/react.svg" },
  { name: "Next.js", img: "/assets/nextjs.png" },
  { name: "Git", img: "/assets/git.png" },
  { name: "Tailwind CSS", img: "/assets/tailwindcss.png" },
  { name: "shadcn UI", img: "/assets/shadcn.png" },
  { name: "React Native", img: "/assets/react-native.png" },
  { name: "Ant Design", img: "/assets/antd.png" },
];

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({ img, name }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className={cn(
        "relative w-28 h-28 md:w-32 md:h-32 cursor-pointer overflow-hidden rounded-xl border p-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img className="h-16 w-16 md:h-20 md:w-20" alt={name} src={img} />
      <p className="mt-2 text-center text-xs md:text-sm font-medium text-gray-800 dark:text-white">
        {name}
      </p>
    </div>
  );
};

export function SkillsMarquee() {
  return (
    <>
      <h1
        id="skills"
        className="text-center mt-0 relative pt-20 dark:text-white dark:bg-black bg-opacity-10 text-2xl font-mono font-bold py-4"
      >
        SKILLS
      </h1>
      <div className="relative flex h-[300px] dark:bg-black bg-opacity-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:15s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-3[--duration:15s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
}
