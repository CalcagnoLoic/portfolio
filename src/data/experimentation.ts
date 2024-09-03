import type { Project } from "../definitions";

export const ExperimentationsProject: Project[] = [
  {
    projectId: "Y*5aVti",
    projectIllustration: "src/assets/img/sweettogo.webp",
    projectWebsite: "",
    projectTitle: "Sweet To Go",
    projectStatus: true,
    projectStack: ["redux", "react", "ts", "tw"],
    projectLink: [
      {
        href: "https://github.com/CalcagnoLoic/sweet-to-go",
        kind: "github",
        css: "w-8 h-8",
      },
      {
        href: "",
        kind: "website",
        css: "w-8 h-8",
      },
    ],
  },
  {
    projectId: "*YooA7N",
    projectIllustration: "src/assets/img/crowdfund.webp",
    projectWebsite: "https://calcagnoloic.github.io/crowdfunding-webapp/",
    projectTitle: "Crowdfunding webapp",
    projectStatus: false,
    projectStack: ["react", "ts", "storybook", "tw"],
    projectLink: [
      {
        href: "https://github.com/CalcagnoLoic/crowdfunding-webapp",
        kind: "github",
        css: "w-8 h-8",
      },
      {
        href: "https://calcagnoloic.github.io/crowdfunding-webapp/",
        kind: "website",
        css: "w-8 h-8",
      },
    ],
  },
  {
    projectId: "1nh-soc",
    projectIllustration: "src/assets/img/calculator-app.webp",
    projectWebsite: "https://calcagnoloic.github.io/calculator/",
    projectTitle: "Calculator app",
    projectStatus: false,
    projectStack: ["ts", "tw"],
    projectLink: [
      {
        href: "https://github.com/CalcagnoLoic/calculator",
        kind: "github",
        css: "w-8 h-8",
      },
      {
        href: "https://calcagnoloic.github.io/calculator/",
        kind: "website",
        css: "w-8 h-8",
      },
    ],
  },
];
