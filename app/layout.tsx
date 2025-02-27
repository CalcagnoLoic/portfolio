import { Metadata } from "next";

import NavBar from "./ui/components/NavBar";
import { barlow } from "./ui/fonts";

import "@/app/style.css";

export const metadata: Metadata = {
  title: "Calcagno Loïc",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,  initial-scale=1.0" />
    </head>
    <body className={barlow.className}>
      <NavBar />
      <main className="pt-20 lg:pt-24">{children}</main>
    </body>
  </html>
);

export default RootLayout;
