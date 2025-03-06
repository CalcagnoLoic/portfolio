"use client";

import { useEffect, useState } from "react";
import { bellefair, sofia } from "../fonts";

import { Professional } from "@/app/data/professional";
import { Projects } from "@/app/definitions/definitions";
import FilterOption from "./FilterOption";
import { handleMoreProject } from "@/last/src/utils/showMoreProject";
import Link from "@/last/src/components/Link/Link";
import Image from "next/image";

const Project = () => {
  const [displayedData, setDisplayedData] = useState<Projects[]>(Professional);
  const [visibleProject, setVisibleProject] = useState<number>(3);
  const [selected, setSelected] = useState<string[]>(["all"]);

  useEffect(() => {
    setDisplayedData(
      Professional.filter(
        (project) =>
          selected.includes("all") || selected.includes(project.category)
      ).slice(0, visibleProject)
    );
  }, [visibleProject, selected]);

  const filteredProject = displayedData.filter((category) => {
    return selected.includes("all") || selected.includes(category.category);
  });

  return (
    <section className="hero_section">
      <h2 className={`text-accent text-center text-2xl ${sofia.className}`}>
        Mes projects
      </h2>

      <FilterOption selected={selected} setSelected={setSelected} />

      {filteredProject && (
        <div className="mt-5 grid grid-cols-1 gap-5 text-primary md:grid-cols-2 lg:grid-cols-3">
          {filteredProject.map((item) => (
            <div
              className="mt-8 overflow-hidden shadow-lg"
              key={item.projectTitle}
            >
              <article className="relative">
                <Link
                  content={
                    <Image
                      src={item.projectIllustration}
                      alt={item.projectTitle}
                      className="w-full rounded-t-3xl object-contain transition duration-700 ease-in-out hover:scale-110"
                      width={500}
                      height={500}
                    />
                  }
                  href={item.projectWebsite}
                  target="_blanck"
                  css="hover:opacity-70 block overflow-hidden rounded-t-3xl"
                />

                <div className="absolute left-4 top-4">
                  <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-cards-labels opacity-70"></div>
                  <div className="relative rounded-xl border border-white/40 bg-cards-labels px-3 py-1 text-ternary shadow-md">
                    {item.category}
                  </div>
                </div>
              </article>

              <article className="text-primary items-stretch overflow-hidden rounded-b-3xl bg-[#123524] p-5">
                <span className="hidden">{item.category}</span>
                <div className="md:h-52 2xl:h-44">
                  <div className="flex flex-col justify-between md:flex-row">
                    <h3 className={`text-2xl ${sofia.className}`}>
                      {item.projectTitle}
                    </h3>
                    {item.inProgress && (
                      <span
                        className={`uppercase bg-cards-labels md:self-center rounded-2xl py-1 px-2 mt-3 md:mt-0 text-center font-bold text-ternary ${bellefair.className}`}
                      >
                        ⚠ en cours ⚠
                      </span>
                    )}
                  </div>

                  <p className="mt-3 italic text-base md:text-lg">
                    {item.projectDescription}
                  </p>
                </div>

                <div className="mt-5 flex flex-col items-center gap-5 lg:mt-8 lg:flex-row lg:justify-between">
                  <div className="flex gap-5">{item.projectStack}</div>

                  <div className="flex gap-5">{item.projectLink}</div>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}

      {visibleProject < Professional.length && (
        <div className="z-10 mt-8 flex items-center justify-center">
          <button
            className="rounded-full bg-accent text-primary px-6 py-3 shadow-xl cursor-pointer hover:bg-hover transition duration-700 ease-out"
            onClick={() => handleMoreProject(setVisibleProject)}
          >
            <span className={`whitespace-pre-wrap text-center text-2xl font-medium leading-none tracking-tight text-gallery lg:text-xl  ${bellefair.className}`}>
              Voir plus de projets...
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
