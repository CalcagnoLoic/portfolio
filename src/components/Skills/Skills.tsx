import { skills } from "@data/skills";

import Heading from "@typographies/Heading/Heading";
import Paragraph from "@typographies/Paragraph/Paragraph";

const Component = () => (
  <>
    <Heading
      kind="h2"
      css="mb-10 text-center font-[sofia] text-2xl underline md:text-4xl"
      content="Que puis-je faire pour vous?"
      id="skills"
    />

    <div className="grid h-full grid-cols-1 gap-5 text-white md:grid-cols-2 lg:grid-cols-3">
      {skills.map((item) => (
        <section
          key={item.id}
          className="items-stretch rounded-xl bg-tuatara p-5"
        >
          <div className="flex justify-center gap-3">
            <Heading
              kind="h3"
              content={item.skillsTitle}
              css="text-center text-xl md:text-3xl font-[sofia] self-center"
            />

            {/* <div className="self-center">{item.skillsIcons}</div> */}
          </div>

          <Paragraph
            kind="p"
            content={item.skillsPresentation}
            css="mt-5 text-center h-32"
          />

          <div className="mt-5 flex justify-center gap-2 lg:gap-4">
            {item.skills}
          </div>
        </section>
      ))}
    </div>
  </>
);

export default Component;
