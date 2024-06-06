import Link from "../Link";
import NetworkIcons from "../../icons/NetworkIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <footer className="flex flex-col bg-tuatara px-12 py-7  text-lg text-white md:flex-row md:justify-between md:px-32">
    <div className="absolute left-1/2 h-[2px] w-2/3 -translate-x-[50%] bg-white"></div>
    <Paragraph
      kind="p"
      css="text-center md:text-start mt-8"
      content="Portfolio | Calcagno Loïc - &copy; Copyright 2024"
    />
    <div className="mt-5 flex gap-5 self-center md:mt-8">
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

export default Component;
