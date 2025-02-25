import { CardsBounce } from "@components/Motion/Motion";
import { handleMoreProject } from "@utils/showMoreProject";
import { Professional } from "@data/professional";
import { Projects } from "@definitions/definitions";
import { useEffect, useState } from "react";

import FilterOption from "@components/FilterOption/FilterOption";
import Heading from "@typographies/Heading/Heading";
import Link from "@components/Link/Link";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = () => {
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
      <Heading
        kind="h2"
        content="Plongez dans mes dernières créations"
        id="projects"
        css="text-center font-[sofia] text-2xl underline md:text-4xl"
      />

      <FilterOption selected={selected} setSelected={setSelected} />

      {filteredProject && (
        <div className="mt-5 grid grid-cols-1 gap-5 text-gallery md:grid-cols-2 lg:grid-cols-3">
          {filteredProject.map((item) => (
            <CardsBounce
              id={item.projectTitle}
              className="mt-8 h-full overflow-hidden drop-shadow-xl"
            >
              <article className="relative">
                <Link
                  content={
                    <img
                      src={item.projectIllustration}
                      alt={item.projectTitle}
                      className="w-full rounded-t-3xl border-[1px] border-tuatara object-contain transition duration-700 ease-in-out hover:scale-110"
                      loading="lazy"
                    />
                  }
                  href={item.projectWebsite}
                  target="_blanck"
                  css="hover:opacity-70 block overflow-hidden rounded-t-3xl"
                />

                <div className="absolute left-4 top-4">
                  <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl border border-tuatara bg-white opacity-70"></div>
                  <div className="relative rounded-xl border border-white/40 bg-tuatara px-3 py-1 text-white shadow-md">
                    {item.category}
                  </div>
                </div>
              </article>

              <article className="texte-gallery items-stretch overflow-hidden rounded-b-3xl bg-tuatara p-5">
                <span className="hidden">{item.category}</span>
                <div className="md:h-52 2xl:h-44">
                  <div className="flex flex-col justify-between md:flex-row">
                    <Heading
                      kind="h3"
                      content={item.projectTitle}
                      css="text-2xl font-[sofia]"
                    />
                    {item.inProgress && (
                      <Paragraph
                        kind="span"
                        css="font-[bellefair] uppercase bg-torchRed md:self-center rounded-2xl py-1 px-2 mt-3 md:mt-0 text-center font-bold"
                        content="🛠️ en cours 🛠️"
                      />
                    )}
                  </div>

                  <Paragraph
                    kind="p"
                    content={item.projectDescription}
                    css="mt-3 italic text-base md:text-lg "
                  />
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

      {visibleProject < Professional.length && (
        <div className="z-10 mt-8 flex items-center justify-center">
          <button
            className="rounded-2xl bg-tuatara px-6 py-3 shadow-xl"
            onClick={() => handleMoreProject(setVisibleProject)}
          >
            <span className="whitespace-pre-wrap text-center font-[bellefair] text-2xl font-medium leading-none tracking-tight text-gallery lg:text-xl dark:from-gallery dark:to-slate-900/10">
              Voir plus de projets...
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Component;
