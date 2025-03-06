import NetworkIcons from "../icons/NetworkIcons";
import Link from "./Link";

const Footer = () => {
  const nowYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-secondary px-12  py-8 text-lg text-primary md:flex-row md:justify-between md:px-32 border-t border-t-primary">
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
