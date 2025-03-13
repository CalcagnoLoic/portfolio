"use client";

import { skills } from "@/app/data/skills";
import { sofia } from "../fonts";
import { CardsContainerMotion, CardsMotion } from "../Motion/Cards";
import { Title } from "../Motion/Title";

const Skills = () => {
  return (
    <>
      <Title
        id="Compétences"
        className={`text-accent-primary mb-10 text-center text-2xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] md:text-4xl ${sofia.className}`}
      >
        Que puis-je faire pour vous?
      </Title>

      <CardsContainerMotion>
        <div className="text-primary mb-6 grid h-full grid-cols-1 gap-5 sm:mb-12 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((item) => (
            <CardsMotion
              key={item.id}
              id={item.id}
              className="bg-ternary bg-card-primary flex flex-1 flex-col items-stretch rounded-xl p-5 shadow-lg shadow-[#141E28]"
            >
              <div className="flex justify-center gap-3">
                <h3
                  className={`self-center text-center text-2xl ${sofia.className}`}
                >
                  {item.skillsTitle}
                </h3>
              </div>

              <p className="mt-5 h-full flex-grow text-center">
                {item.skillsPresentation}
              </p>

              <div className="mt-5 flex justify-center gap-2 lg:gap-4">
                {item.skills}
              </div>
            </CardsMotion>
          ))}
        </div>
      </CardsContainerMotion>
    </>
  );
};

export default Skills;
