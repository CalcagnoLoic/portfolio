import { Professional } from "../../../data/professional";

import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Heading
        kind="h2"
        content="Dive into my latest creations"
        id="projects"
        css="text-center font-[sofia] text-2xl underline md:text-4xl"
      />

      <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-2 2xl:grid-cols-3 mt-5">
        {Professional.map((item) => (
          <section key={item.id} className="mt-8 drop-shadow-xl">
            <Link
              content={
                <img
                  src={item.projectIllustration}
                  alt={item.projectTitle}
                  className="rounded-t-3xl border-tuatara border-[1px]"
                />
              }
              href={item.projectWebsite}
              target="_blanck"
              css="hover:opacity-70 duration-500 transition ease-in-out"
            />

            <article className="texte-white rounded-b-3xl bg-tuatara p-5">
              <Heading
                kind="h3"
                content={item.projectTitle}
                css="text-2xl font-[sofia]"
              />

              <Paragraph
                kind="p"
                content={item.projectDescription}
                css="mt-3 italic text-sm md:text-base "
              />

              <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
                <div className="flex gap-5">{item.projectStack}</div>

                <div className="flex gap-5">{item.projectLink}</div>
              </div>
            </article>
          </section>
        ))}
      </div>
    </>
  );
};

export default Component;
