import { handleMoreProject } from "../../../utils/showMoreProject";
import { Professional } from "../../../data/professional";
import { Projects } from "../../../types/interface";
import { useEffect, useState } from "react";

import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";
import ShimmerButton from "../../MagicUI/shimmer-button";

const Component = () => {
  const [displayedData, setDisplayedData] = useState<Projects[]>(Professional);
  const [visibleProject, setVisibleProject] = useState<number>(3);

  useEffect(() => {
    setDisplayedData(Professional.slice(0, visibleProject));
  }, [visibleProject]);

  return (
    <>
      <Heading
        kind="h2"
        content="Dive into my latest creations"
        id="projects"
        css="text-center font-[sofia] text-2xl underline md:text-4xl"
      />

      {displayedData && (
        <div className="container mt-5 grid grid-cols-1 gap-5 text-gallery md:grid-cols-2 2xl:grid-cols-3">
          {displayedData.map((item) => (
            <section key={item.id} className="mt-8 h-full drop-shadow-xl">
              <Link
                content={
                  <img
                    src={item.projectIllustration}
                    alt={item.projectTitle}
                    className="rounded-t-3xl border-[1px] border-tuatara"
                    loading="lazy"
                  />
                }
                href={item.projectWebsite}
                target="_blanck"
                css="hover:opacity-70 duration-500 transition ease-in-out"
              />

              <article className="texte-gallery items-stretch rounded-b-3xl bg-tuatara p-5">
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
                        css="font-[bellefair]  uppercase bg-torchRed md:self-center rounded-2xl py-1 px-2 mt-3 md:mt-0 text-center font-bold"
                        content="🛠️ in progress 🛠️"
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
            </section>
          ))}
        </div>
      )}

      {visibleProject < Professional.length && (
        <div className="z-10 mt-8 flex items-center justify-center">
          <ShimmerButton
            className="shadow-2xl"
            onClick={() => handleMoreProject(setVisibleProject)}
          >
            <span className="font-[bellefair] whitespace-pre-wrap text-center text-2xl font-medium leading-none tracking-tight text-gallery lg:text-lg dark:from-gallery dark:to-slate-900/10">
              Load More...
            </span>
          </ShimmerButton>
        </div>
      )}
    </>
  );
};

export default Component;
