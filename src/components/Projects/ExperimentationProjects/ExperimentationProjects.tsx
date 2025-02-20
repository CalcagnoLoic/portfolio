import { Experimentation } from "@data/experimentations";
import { Projects } from "@definitions/definitions";
import { useState } from "react";

import Heading from "@typographies/Heading/Heading";
import Link from "@components/Link/Link";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = () => {
  const [displayedData] = useState<Projects[]>(Experimentation);

  return (
    <>
      <Heading
        kind="h2"
        id="experimentations"
        css="text-center font-[sofia] text-2xl md:text-4xl underline"
        content="S'aventurer dans l'inconnu"
      />

      {displayedData && (
        <div className=" mt-5 grid grid-cols-1 gap-5 text-white md:grid-cols-2 2xl:grid-cols-3">
          {displayedData.map((item) => (
            <section key={item.id} className="mt-8 overflow-hidden">
              <Link
                content={
                  <img
                    src={item.projectIllustration}
                    alt={item.projectTitle}
                    className="transform-gpu rounded-t-3xl transition duration-700 ease-in-out hover:scale-110"
                    loading="lazy"
                  />
                }
                href={item.projectWebsite}
                target="_blanck"
                css="hover:opacity-80 block overflow-hidden rounded-t-3xl"
              />

              <article className="rounded-b-3xl border-t-[1px] border-t-tuatara bg-white p-5 text-tuatara">
                <div className="md:h-64 2xl:h-44">
                  <Heading
                    kind="h3"
                    content={item.projectTitle}
                    css="text-2xl font-[sofia]"
                  />

                  <Paragraph
                    kind="p"
                    content={item.projectDescription}
                    css="mt-3 italic text-base md:text-lg"
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
    </>
  );
};

export default Component;
