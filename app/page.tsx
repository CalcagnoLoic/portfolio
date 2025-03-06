import Presentation from "./ui/components/Presentation";
import Project from "./ui/components/Project";
import Skills from "./ui/components/Skills";

const Page = () => {
  return (
    <>
      <section className="bg-primary text-primary hero_section">
        <Presentation />
      </section>
      <section className="bg-secondary text-primary hero_section">
        <Project />
      </section>
      <section className="bg-primary text-primary">
        <Skills />
      </section>
    </>
  );
};

export default Page;
