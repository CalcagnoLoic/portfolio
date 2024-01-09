import { Cards } from "./Cards";

const Projects = () => {
  return (
    <section className="px-5 sm:px-5 md:px-8 lg:px-28 pb-20 pt-20">
      <h2
        id="projects"
        className="text-center text-main-color text-3xl lg:text-4xl font-bold font-[sofia] underline pb-10"
      >
        Recent projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-10">
        <Cards />
      </div>
    </section>
  );
};

export default Projects;
