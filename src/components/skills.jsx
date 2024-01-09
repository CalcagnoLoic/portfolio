import { CardsSkills } from "./Cards_skills";

const Skills = () => {
  return (
    <section className="px-5 sm:px-5 md:px-8 lg:px-28 pb-20 pt-20 bg-main-color">
      <h2
        id="skills"
        className="text-center text-white text-3xl lg:text-4xl font-bold pb-10 font-[sofia] underline"
      >
        My skills
      </h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        <CardsSkills />
      </div>
    </section>
  );
};

export default Skills;
