import Link from "@components/Link/Link";
import NetworkIcons from "@icons/NetworkIcons/NetworkIcons";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = () => {
  const nowYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col bg-tuatara px-12  py-8 text-lg text-white md:flex-row md:justify-between md:px-32">
      <Paragraph
        kind="p"
        css="text-center md:text-start"
        content={`Portfolio | Calcagno Loïc - Copyright ${nowYear}`}
      />
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

export default Component;
