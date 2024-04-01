import { Experimentation } from "../../../data/experimentations";

import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Heading
        kind="h2"
        id="experimentations"
        css="text-center font-[sofia] text-2xl md:text-4xl underline"
        content="Venturing into the Unknown"
      />

      <div className="mt-5 grid grid-cols-1 gap-5 text-white md:grid-cols-2 2xl:grid-cols-3">
        {Experimentation.map((item) => (
          <section key={item.id} className="mt-8">
            <Link
              content={
                <img
                  src={item.projectIllustration}
                  alt={item.projectTitle}
                  className="rounded-t-3xl"
                />
              }
              href={item.projectWebsite}
              target="_blanck"
              css="hover:opacity-50 duration-500 transition ease-in-out"
            />

            <article className="rounded-b-3xl border-t-[1px] border-t-tuatara bg-white p-5 text-tuatara">
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
