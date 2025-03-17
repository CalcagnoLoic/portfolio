import "@/app/global.css";

import { barlow } from "./ui/fonts";
import { Metadata } from "next";

import Footer from "./ui/components/Footer";
import GeneralIcons from "./ui/icons/GeneralIcons";
import NavBar from "./ui/components/NavBar";
import ScrollProgressBar from "./ui/Motion/ProgressBar";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Calcagno Loïc",
    template: "%s | Calcagno Loïc",
  },
  description:
    "Bienvenue sur mon portfolio ! Je suis Loïc, développeur passionné par la tech. J'accompagne entreprises et particuliers dans la création d'applications web modernes et performantes. Je baigne dans l'écosystème JavaScript et React depuis plusieurs années, mais j'ai aussi une expertise en data et Python.",
  applicationName: "Portfolio | Calcagno Loïc",
  authors: { name: "Calcagno Loïc", url: "https://github.com/CalcagnoLoic" },
  creator: "Calcagno Loïc",
  publisher: "Calcagno Loïc",
  keywords: [
    "Développeur",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "CICD",
    "Python",
    "Belgique",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="o7hSlKqTn1NkckreouW6mYQRa85NLh5PKa8DapudqUk"
      />
    </head>
    <body
      className={`${barlow.className} bg-primary flex min-h-screen flex-col`}
      id="#top"
    >
      <NavBar />
      <main className="flex-grow pt-20 lg:pt-24">{children}</main>
      <Footer />
      <ScrollProgressBar />
      <GeneralIcons kind="goback" />
    </body>
  </html>
);

export default RootLayout;
