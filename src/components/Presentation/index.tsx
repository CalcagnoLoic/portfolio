import CV from "../../../public/assets/CV_dev.pdf";
import PICTURE from "../../../public/assets/img/photo.png";

import Link from "../Link";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => (
  <section className="py-12">
    <div className="mt-10 flex flex-col lg:flex-row">
      <article className="self-center">
        <Heading
          kind="h3"
          content="Welcome 👋"
          css="text-xl md:text-3xl mt-5 italic text-center lg:text-start font-[sofia]"
        />
        <Heading
          kind="h2"
          content="I am <React and Python developer />"
          css="text-2xl md:text-4xl mt-8 italic text-center lg:text-start font-[sofia]"
        />
        <Paragraph
          kind="p"
          content="I'm deeply passionate about web development, a journey that began with self-teaching. Each project and challenge fuels my inspiration as I explore new technologies and tackle complex tasks. This portfolio showcases my proudest achievements in web development."
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />
        <Paragraph
          kind="p"
          content="In addition to my dedication to web development, I have a strong commitment to knowledge sharing. I eagerly contribute to the community by sharing what I've learned. This portfolio reflects my journey, skills, and determination to excel in the dynamic field of web development."
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />

        <section className="mt-10 flex flex-col justify-center gap-5 md:mt-16 md:flex-row lg:w-5/6">
          <Link
            content="Contact Me"
            href="#contact"
            css="font-[bellefair] bg-torchRed px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out"
          />
          <Link
            content="CV"
            href={CV}
            target="_blanck"
            css="bg-torchRed px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out"
          />
        </section>
      </article>
      <article className="mt-5 flex lg:mt-0">
        <img
          src={PICTURE}
          alt="React and Python developer"
          className="m-auto block w-1/2 self-center rounded-full lg:w-full"
        />
      </article>
    </div>
  </section>
);

export default Component;
