"use client";

import { skills } from "@/app/data/skills";
import { sofia } from "../fonts";
import { CardsContainerMotion, CardsMotion } from "../Motion/Cards";
import { TitleMotion } from "../Motion/Title";

const Skills = () => {
  console.log(TitleMotion);
  return ( 
    <>
      <TitleMotion
        id="skills"
        className={`mb-10 text-center text-2xl md:text-4xl text-accent-primary ${sofia.className}`}
      >
        Que puis-je faire pour vous?
      </TitleMotion>

      <CardsContainerMotion>
        <div className="grid h-full grid-cols-1 gap-5 text-tuatara md:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => (
            <CardsMotion
              key={item.id}
              id={item.id}
              className="flex flex-1 flex-col items-stretch rounded-xl bg-cards p-5"
            >
              <div className="flex justify-center gap-3">
                <h3
                  className={`text-center text-xl md:text-3xl font-[sofia] self-center ${sofia.className}`}
                >
                  {item.skillsTitle}
                </h3>
              </div>

              <p className="mt-5 text-center h-full flex-grow">
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
