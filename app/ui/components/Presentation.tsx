import Image from "next/image";
import { sofia } from "../fonts";

const Presentation = () => {
  return (
<div className="hero_section flex flex-col lg:flex-row">
  <div className="lg:w-2/3 flex flex-col lg:justify-center">
    <h2
      className={`${sofia.className} main_title`}
      style={{ fontWeight: 500 }}
    >
      Bienvenue dans mon univers 🚀
    </h2>

    <p
      className={`text-center md:text-start text-xl md:text-2xl lg:text-3xl mt-3 text-secondary ${sofia.className}`}
    >
      Je suis ...
    </p>

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
      <button className="bg-accent text-primary rounded-3xl px-6 py-3 cursor-pointer hover:bg-hover transition duration-700 ease">
        En savoir plus?{" "}
      </button>
      <button className="bg-accent text-primary rounded-3xl px-6 py-3">
        Restons en contact!{" "}
      </button>
    </div>
  </div>

  <div className="lg:flex-1 flex justify-center lg:justify-end items-center">
    <Image
      src="/assets/img/photo.webp"
      alt="moi"
      width={200}
      height={200}
      className="rounded-3xl mt-5 lg:w-[300px] lg:h-[325px]"
      loading="lazy"
    />
  </div>
</div>



  );
};

export default Presentation;
