import { Typewriter } from "react-simple-typewriter";

import CALCAGNO_LOIC_CV_en from "@public/CALCAGNO_LOIC_CV.pdf";
import PICTURE from "@public/img/photo.webp";

import GeneralIcons from "@icons/GeneralIcons/GeneralIcons";
import Heading from "@typographies/Heading/Heading";
import Link from "@components/Link/Link";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = () => (
  <section className="py-12">
    <div className="mt-10 flex flex-col lg:flex-row">
      <article className="self-center">
        <Heading
          kind="h3"
          content="Bienvenue 👋"
          css="text-xl md:text-3xl mt-5 italic text-center lg:text-start font-[sofia]"
          id="top"
        />
        <div className="flex flex-col xl:flex-row">
          <span className="mt-8 text-center font-[sofia] text-2xl italic md:text-4xl lg:text-start">
            <Heading
              kind="h2"
              content="Je suis "
              css="block mr-5 mb-5 xl:mb-0 xl:inline-block"
            />
            <Typewriter
              words={[
                "<développeur React/TypeScript... />",
                "__avec une expérience en Python.__",
              ]}
              loop
              cursor
            />
          </span>
        </div>

        <Paragraph
          kind="p"
          content="Je suis profondément passionné par le développement web, un voyage qui a commencé par l'auto-apprentissage. Principalement développeur React, j'ai également une forte affinité pour le développement backend, en particulier avec Python. Chaque projet et défi alimente mon inspiration alors que j'explore de nouvelles technologies et que je m'attaque à des tâches complexes"
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />
        <Paragraph
          kind="p"
          content="Ce portfolio présente les réalisations dont je suis le plus fier en matière de développement web. Outre mon dévouement au développement web, je suis très enthousiaste à l'idée de partager mes connaissances. Je suis impatient de contribuer à la communauté en partageant ce que j'ai appris."
          css="lg:w-5/6 text-center lg:text-start mt-5 text-lg md:text-xl font-[barlow]"
        />

        <section className="mt-10 flex flex-col justify-center gap-5 md:mt-16 md:flex-row lg:w-5/6">
          <Link
            content="Contactez moi"
            href="#contact"
            css="font-[bellefair] bg-torchRed px-10 py-3 text-2xl rounded-xl w-full text-center cursor-pointer hover:text-tuatara hover:bg-white duration-300 ease-in-out"
            aria="Contact me with form or directly at calcagnoloic93@gmail.com"
          />
          <Link
            content="CV"
            href={CALCAGNO_LOIC_CV_en}
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
