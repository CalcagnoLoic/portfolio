import Link from "./Link";
import NetworkIcons from "../icons/NetworkIcons";

const Footer = () => {
  const nowYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary border-t-primary flex flex-col border-t px-12 py-8 text-lg md:flex-row md:justify-between md:px-16 lg:px-32">
      <p className="text-center md:text-start">{`Portfolio | Calcagno Loïc - Copyright ${nowYear}`}</p>
      <div className="flex gap-5 self-center">
        <Link
          content={<NetworkIcons kind="linkedin" />}
          href="https://www.linkedin.com/in/loic-calcagno/"
          target="_blank"
          aria="Visit my linkedin and get in touch!"
        />
        <Link
          content={<NetworkIcons kind="github" isDarkBackground={false} />}
          href="https://github.com/CalcagnoLoic"
          target="_blank"
          aria="Visit my github!"
        />
        <Link
          content={<NetworkIcons kind="gmail" />}
          href="mailto:calcagnoloic93@gmail.com"
          aria="Send me a mail if you want more informations!"
        />
      </div>
    </footer>
  );
};

export default Footer;
