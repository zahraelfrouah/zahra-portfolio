import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Programming Instructor & Association Member",
    location: "Morocco, Agadir",
    description:
      "Taught programming to students through the MADEE Association, strengthening technical skills, teamwork, and communication. Adapted teaching approaches to different learning styles and collaborated with team members to create a supportive learning environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: " Full-Stack Web Developer Intern",
    location: "Morocco, Agadir",
    description:
      "Contributed to the development of a real-world company website and dashboard, working across both front-end and back-end. Built responsive user interfaces using React, Next.js, TypeScript, and Tailwind CSS, and worked on back-end development with Node.js, Express, and Prisma. Collaborated with the team using Jira, Git, and Bitbucket, while using Figma to support UI/UX design.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "MOVE DABA",
    description:
      "MoveDava is a comprehensive moving services platform designed to simplify the relocation process for clients.",
    tags: ["React", "Next.js", "Swiper", "Tailwind", "Axios","Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Cinema",
    description:
      "Cinema is a movie discovery web application that allows users to explore movies, search by title, filter results, view movie details, and watch trailers.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB","NodeJs","Express","REST API"],
    imageUrl: rmtdevImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Mongose",
  "Redux",
  "Express",
  "Framer Motion",
] as const;