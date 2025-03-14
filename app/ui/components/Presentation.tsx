import { bellefair, sofia } from "../fonts";

import Image from "next/image";
import Typewriter from "./TypeWritter";

const Presentation = () => {
  return (
    <div className="mb-6 flex flex-col lg:mb-12 lg:flex-row">
      <div className="flex flex-col lg:w-2/3 lg:justify-center">
        <h2
          className={`${sofia.className} main-title`}
          style={{ fontWeight: 500 }}
        >
          Bienvenue dans mon univers 🚀
        </h2>

        <Typewriter />

        <div className="bg-accent-yellow-light mx-auto mt-3 mb-5 block h-1 w-16 md:mx-0 md:h-2 md:w-24 lg:w-28"></div>

        <p className="mt-3 text-center text-lg md:text-start">
          Je suis profondément passionné par le développement web, un voyage qui
          a commencé par l&apos;auto-apprentissage. Principalement développeur
          React, j&apos;ai également une forte affinité pour le développement
          backend, en particulier avec Python. Chaque projet et défi alimente
          mon inspiration alors que j&apos;explore de nouvelles technologies et
          que je m&apos;attaque à des tâches complexes
        </p>

        <p className="mt-3 text-center text-lg md:text-start">
          Ce portfolio présente les réalisations dont je suis le plus fier en
          matière de développement web. Outre mon dévouement au développement
          web, je suis très enthousiaste à l&apos;idée de partager mes
          connaissances. Je suis impatient de contribuer à la communauté en
          partageant ce que j&apos;ai appris.
        </p>

        <div className="mt-5 flex flex-col gap-5 md:flex-row">
          <a
            href="/assets/CALCAGNO_LOIC_CV.pdf"
            download
            className={`button text-accent bg-[linear-gradient(to_right,#FFCA74,#FFD798)] text-lg ${bellefair.className}`}
          >
            Télécharger mon CV 📌
          </a>
          <a
            href="#contact"
            className={`button bg-accent-secondary text-accent text-ce bg-[linear-gradient(to_right,#FFCA74,#FFD798)] text-lg ${bellefair.className}`}
          >
            Restons en contact!
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
        <Image
          src="/assets/img/photo.png"
          alt="moi"
          width={200}
          height={200}
          className="mt-5 lg:h-[325px] lg:w-[300px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Presentation;
