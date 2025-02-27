import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcagno Loïc"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="fr">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
