import { Cards } from './cards';

const Projects = () => {
    return (
        <div className='px-5 sm:px-5 md:px-8 lg:px-28'>
            <h2 id="projets" className="text-center text-dark-blue my-10 text-3xl lg:text-4xl font-bold">Mes projets</h2>

            <Cards />
        </div>
    )
}

export default Projects