import Link from "../Link";
import NetworkIcons from "../../icons/NetworkIcons";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <footer className="flex flex-col bg-tuatara px-12 py-5 pt-5 text-lg text-white md:flex-row md:justify-between md:px-32">
    <Paragraph
      kind="p"
      css="text-center md:text-start"
      content="Portfolio | Calcagno Loïc - &copy; Copyright 2024"
    />
    <div className="mt-5 flex gap-5 self-center md:mt-0">
      <Link
        content={<NetworkIcons kind="linkedin" />}
        href="https://www.linkedin.com/in/loic-calcagno/"
        target="_blank"
      />
      <Link
        content={<NetworkIcons kind="github" />}
        href="https://github.com/CalcagnoLoic"
        target="_blank"
      />
      <Link
        content={<NetworkIcons kind="gmail" />}
        href="mailto:calcagnoloic93@gmail.com"
      />
    </div>
  </footer>
);

export default Component;
