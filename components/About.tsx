"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8  sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a passionate{" "}
        <span className="font-medium">Full-Stack Developer</span>. who loves
        turning ideas into real, scalable web applications.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
         MERN
        </span>
         , and I’m also familiar with NextJS and modern web development tools. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies. I also enjoy{" "}
        <span className="font-medium">
          {" "}
          learning about psychology and neurology,
        </span>{" "}
        exploring how the human mind works and how behavior is shaped
        <span>
          . I also spend time developing my creative side by{" "}
          <span className="font-medium">learning how to draw and paint</span>,
          which helps me express ideas visually and think in new ways.
        </span>
      </p>
    </motion.section>
  );
}
