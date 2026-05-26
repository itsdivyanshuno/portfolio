import type { Project } from "@/types/project";

export const projects: Project[] = [

  {
    title: "Portfolio Website",

    description:
      "Modern portfolio built using Next.js, Tailwind and Framer Motion.",

    tech: ["Next.js", "Tailwind", "Firebase"],

    image: "/portfolio.jpg",

    github: "https://github.com/itsdivyanshuno/portfolio",

    demo: "https://portfolio-alpha-ochre-48.vercel.app/",
  },

  {
    title: "Student Database System",

    description:
      "Student management project with subject cards and structured data.",

    tech: ["React", "Firebase", "Framer Motion"],

    image: "/student-db-v2.jpeg",

    github: "https://github.com/itsdivyanshuno/hbtu-scorecard",

    demo: "https://hbtu-scorecard.vercel.app/",
  },

  {
    title: "Allen PDF Library System",

    description:
      "A PHP dashboard to upload and access subject-wise study PDFs.",

    tech: ["PHP", "mySql", "AJAX", "jQuery", "CSS"],

    image: "/git-allen.jpg",

    github: "https://github.com/itsdivyanshuno/allen",

    demo: "",
  },

];