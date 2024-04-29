import { handleMoreProject } from "../../../utils/showMoreProject";
import { Professional } from "../../../data/professional";
import { useEffect, useState } from "react";
import { Projects } from "../../../types/interface";

import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

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
        <div className="container  mt-5 grid grid-cols-1 gap-5 text-white md:grid-cols-2 2xl:grid-cols-3">
          {displayedData.map((item) => (
            <section key={item.id} className=" mt-8 h-full drop-shadow-xl">
              <Link
                content={
                  <img
                    src={item.projectIllustration}
                    alt={item.projectTitle}
                    className="rounded-t-3xl border-[1px] border-tuatara"
                  />
                }
                href={item.projectWebsite}
                target="_blanck"
                css="hover:opacity-70 duration-500 transition ease-in-out"
              />

              <article className="texte-white items-stretch rounded-b-3xl bg-tuatara p-5">
                <div className="md:h-52 2xl:h-44">
                  <Heading
                    kind="h3"
                    content={item.projectTitle}
                    css="text-2xl font-[sofia]"
                  />

                  <Paragraph
                    kind="p"
                    content={item.projectDescription}
                    css="mt-3 italic text-base md:text-lg "
                  />
                </div>

                <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
                  <div className="flex gap-5">{item.projectStack}</div>

                  <div className="flex gap-5">{item.projectLink}</div>
                </div>
              </article>
            </section>
          ))}
        </div>
      )}

      {visibleProject < Professional.length && (
        <button
          className="mx-auto mt-12 block cursor-pointer rounded-xl bg-torchRed px-8 py-5 font-bold text-white duration-500 ease-in-out hover:bg-tuatara"
          onClick={() => handleMoreProject(setVisibleProject)}
        >
          Load More ...
        </button>
      )}
    </>
  );
};

export default Component;
