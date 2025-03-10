import Image from "next/image";
import { sofia } from "../fonts";
import Typewriter from "./TypeWritter";

const Presentation = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-2/3 flex flex-col lg:justify-center">
        <h2
          className={`${sofia.className} main_title`}
          style={{ fontWeight: 500 }}
        >
          Bienvenue dans mon univers 🚀
        </h2>

        <Typewriter />

        <p className="mt-3 text-lg text-center md:text-start">
          Je suis profondément passionné par le développement web, un voyage qui
          a commencé par l&apos;auto-apprentissage. Principalement développeur
          React, j&apos;ai également une forte affinité pour le développement
          backend, en particulier avec Python. Chaque projet et défi alimente
          mon inspiration alors que j&apos;explore de nouvelles technologies et
          que je m&apos;attaque à des tâches complexes
        </p>

        <p className="mt-3 text-lg text-center md:text-start ">
          Ce portfolio présente les réalisations dont je suis le plus fier en
          matière de développement web. Outre mon dévouement au développement
          web, je suis très enthousiaste à l&apos;idée de partager mes
          connaissances. Je suis impatient de contribuer à la communauté en
          partageant ce que j&apos;ai appris.
        </p>

        <div className="mt-5 flex flex-col md:flex-row gap-5">
          <a className="button bg-accent text-primary hover:bg-hover">
            En savoir plus?
          </a>
          <a
            href="#contact"
            className="button bg-accent text-primary hover:bg-hover"
          >
            Restons en contact!
          </a>
        </div>
      </div>

      <div className="lg:flex-1 flex justify-center lg:justify-end items-center">
        <Image
          src="/assets/img/photo.png"
          alt="moi"
          width={200}
          height={200}
          className="rounded-full mt-5 lg:w-[300px] lg:h-[325px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Presentation;
