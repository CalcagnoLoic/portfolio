import { Typewriter } from "react-simple-typewriter";

import CV from "../../../public/assets/CV_dev.pdf";
import PICTURE from "../../../public/assets/img/photo.webp";

import Link from "../Link";
import GeneralIcons from "../../icons/GeneralIcons";
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
          id="top"
        />
        <div className="flex flex-col xl:flex-row">
          <span className="mt-8 text-center font-[sofia] text-2xl italic md:text-4xl lg:text-start">
            <Heading
              kind="h2"
              content="I am "
              css="block mr-5 mb-5 xl:mb-0 xl:inline-block"
            />
            <Typewriter
              words={["<React and Python developer />"]}
              loop
              cursor
            />
          </span>
        </div>

        <Paragraph
          kind="p"
          content="I'm deeply passionate about web development, a journey that began with self-teaching. Each project and challenge fuels my inspiration as I explore new technologies and tackle complex tasks. This portfolio showcases my proudest web development achievements."
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />
        <Paragraph
          kind="p"
          content="In addition to my dedication to web development, I'm very enthusiastic about sharing knowledge. I eagerly contribute to the community by sharing what I've learned. This portfolio reflects my journey, skills, and determination to excel in the exciting field of web development."
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />

        <section className="mt-10 flex flex-col justify-center gap-5 md:mt-16 md:flex-row lg:w-5/6">
          <Link
            content="Contact Me"
            href="#contact"
            css="font-[bellefair] bg-torchRed px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out"
            aria="Contact me with form or directly at calcagnoloic93@gmail.com"
          />
          <Link
            content="CV"
            href={CV}
            target="_blanck"
            css="bg-torchRed font-[bellefair] px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out"
            aria="Discover me with my CV"
          />
        </section>
      </article>

      <article className="mt-5 flex lg:mt-0">
        <img
          src={PICTURE}
          alt="React and Python developer"
          className="m-auto block w-1/2 self-center rounded-full lg:w-full"
          loading="lazy"
        />
      </article>

      <GeneralIcons kind="goback" />
    </div>
  </section>
);

export default Component;
