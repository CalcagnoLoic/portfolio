import { Cards } from "./cards";

const Projects = () => {
    return (
        <div className="px-5 sm:px-5 md:px-8 lg:px-28 py-10">
            <h2
                id="projects"
                className="text-center text-dark-blue text-3xl lg:text-4xl font-bold pb-5 font-[sofia] underline italic"
            >
                Recent projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-10">
                <Cards />
            </div>
        </div>
    );
};

export default Projects;
