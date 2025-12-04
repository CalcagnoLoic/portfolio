"use client";

import { bellefair, sofia } from "../fonts";
import { CardsBounce } from "../Motion/Cards";
import { handleMoreProject } from "@/app/utils/showMoreProject";
import { Professional } from "@/app/data/professional";
import { Projects } from "@/app/definitions/definitions";
import { Title } from "../Motion/Title";
import { useEffect, useState } from "react";

import FilterOption from "./FilterOption";
import Image from "next/image";
import LinkRedirection from "./LinkRedirection";

const Project = () => {
  const [displayedData, setDisplayedData] = useState<Projects[]>(Professional);
  const [visibleProject, setVisibleProject] = useState<number>(3);
  const [selected, setSelected] = useState<string[]>(["all"]);

  useEffect(() => {
    setDisplayedData(
      Professional.filter(
        (project) =>
          selected.includes("all") || selected.includes(project.category),
      ).slice(0, visibleProject),
    );
  }, [visibleProject, selected]);

  const filteredProject = displayedData.filter((category) => {
    return selected.includes("all") || selected.includes(category.category);
  });

  return (
    <>
      <Title
        className={`text-primary mb-10 text-center text-2xl [text-shadow:_0_2px_4px_rgba(255,255,255,0.5)] md:text-4xl ${sofia.className}`}
        id="Projets"
      >
        Mes projets
      </Title>

      <FilterOption selected={selected} setSelected={setSelected} />

      {filteredProject && (
        <div className="text-primary mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProject.map((item) => (
            <CardsBounce
              className="mt-8 overflow-hidden"
              key={item.projectTitle}
            >
              <article className="relative">
                <LinkRedirection
                  content={
                    <Image
                      src={item.projectIllustration}
                      alt={item.projectTitle}
                      className="w-full rounded-t-xl object-contain transition duration-700 ease-in-out hover:scale-110"
                      width={500}
                      height={500}
                    />
                  }
                  href={item.projectWebsite}
                  target="_blanck"
                  css="hover:opacity-70 block overflow-hidden rounded-t-xl"
                />

                <div className="absolute top-4 left-4">
                  <div className="bg-card-label absolute inset-0 translate-x-1 translate-y-1 rounded-xl border border-black/70 opacity-70"></div>
                  <div className="bg-card-label text-accent relative rounded-xl border border-black px-3 py-1 shadow-md">
                    {item.category}
                  </div>
                </div>
              </article>

              <article className="text-primary bg-card-primary items-stretch overflow-hidden rounded-b-xl p-5">
                <span className="hidden">{item.category}</span>
                <div className="md:h-52 lg:h-40 xl:h-48 2xl:h-44">
                  <div className="flex flex-col justify-between md:flex-row">
                    <h3 className={`text-primary text-2xl ${sofia.className}`}>
                      {item.projectTitle}
                    </h3>
                    {item.inProgress && (
                      <span
                        className={`bg-card-label text-accent mt-3 rounded-2xl border px-2 py-1 text-center font-bold uppercase md:mt-0 md:self-center ${bellefair.className}`}
                      >
                        ⚠️ en cours ⚠️
                      </span>
                    )}
                  </div>

                  <p className="text-card mt-3 text-base italic md:text-lg">
                    {item.projectDescription}
                  </p>
                </div>

                <div className="mt-5 flex flex-col items-center gap-5 lg:mt-8 lg:flex-row lg:justify-between">
                  <div className="flex gap-5">{item.projectStack}</div>
                  <div className="flex gap-5">{item.projectLink}</div>
                </div>
              </article>
            </CardsBounce>
          ))}
        </div>
      )}

      {visibleProject < Professional.length ? (
        <div className="z-10 mt-8 mb-6 flex items-center justify-center sm:mb-12">
          <button
            className="button bg-accent bg-[linear-gradient(to_right,#5CB7FF,#96C8FF)]"
            onClick={() => handleMoreProject(setVisibleProject)}
          >
            <span
              className={`text-primary text-center text-2xl leading-none font-medium tracking-tight whitespace-pre-wrap lg:text-xl ${bellefair.className}`}
            >
              Voir plus de projets...
            </span>
          </button>
        </div>
      ) : (
        <div className="mb-12"></div>
      )}
    </>
  );
};

export default Project;
