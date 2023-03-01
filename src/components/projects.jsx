import Projet1 from '../assets/img/projet1.png';
import Projet2 from '../assets/img/projet2.png';
import Projet3 from '../assets/img/projet3.png';
import Projet4 from '../assets/img/projet4.png';
import HTML from '../assets/img/html.png';
import SASS from '../assets/img/sass.png';
import JS from '../assets/img/js.png';
import MYSQL from '../assets/img/mysql.png';
import PHP from '../assets/img/php.png';
import GITHUB from '../assets/img/github.png';
import NEWTAB from '../assets/img/newtab.png';

const Projects = () => {
    return (
        <div className='px-5 sm:px-5 md:px-8 lg:px-28'>
            <h2 id="projets" className="text-center text-dark-blue my-10 text-3xl lg:text-4xl font-bold">Mes projets</h2>

            {/* Projet 1 */} 
            <div className='flex gap-5 md:gap-0 lg:gap-0 justify-center mt-7 flex-col md:flex-row bg-dark-blue px-5 py-8 rounded-xl shadow-lg shadow-indigo-500/50'>
                <div className='basis-1/2 self-center'>
                    <a href="https://calcagnoloic.github.io/ChallengeFM_landing_page/" target={'_blank'} rel="noreferrer" className='cursor-default'>
                        <img src={Projet1} className='rounded-lg md:w-5/6 lg:w-3/4 m-auto cursor-pointer' alt="Projet Frontend Mentor | ClipBoard" />
                    </a>
                </div>
                <div className='basis-1/2 self-center'>
                    <h3 className='text-center italic underline sm:text-center md:text-left text-white text-2xl md:text-xl lg:text-2xl mb-3'>Clipboard Landing Page</h3>
                    <h4 className='text-center sm:text-center md:text-left text-white text-xl mb-3'>Réalisation d'une landing page provenant d'un challenge personnel du site <a href="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9" rel="noreferrer" target={'_blank'}>Frontend Mentor.</a></h4>
                    <div className='flex justify-center md:justify-start gap-5 mb-5'>
                        <img src={HTML} className='w-6' alt="Logo HTML5" />
                        <img src={SASS} className='w-7' alt="Logo Sass" />
                    </div>
                    <div className='flex justify-center gap-5 bg-white rounded-lg p-5 lg:mx-36 md:mx-24'>
                        <a href="https://github.com/CalcagnoLoic/ChallengeFM_landing_page" target={'_blank'} rel="noreferrer">
                            <img src={GITHUB} className='w-8 fill-white' alt="Logo Github" />
                        </a>
                        <a href="https://calcagnoloic.github.io/ChallengeFM_landing_page/" target={'_blank'} rel="noreferrer">
                            <img src={NEWTAB} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Projet 2 */} 
            <div className='flex gap-5 md:gap-0 lg:gap-0 justify-center mt-7 flex-col md:flex-row bg-dark-blue px-5 py-8 rounded-xl shadow-lg shadow-indigo-500/50'>
                <div className='basis-1/2 self-center'>
                    <a href="https://calcagnoloic.github.io/dropdown_navigation_FrontendMentor/" target={'_blank'} rel="noreferrer" className='cursor-default'>
                        <img src={Projet2} className='rounded-lg md:w-5/6 lg:w-3/4 m-auto cursor-pointer' alt="Projet Frontend Mentor | Dropdown navbar" />
                    </a>
                </div>
                <div className='basis-1/2 self-center'>
                    <h3 className='text-center italic underline sm:text-center md:text-left text-white text-2xl md:text-xl lg:text-2xl mb-3'>Intro section with dropdown navigation</h3>
                    <h4 className='text-center sm:text-center md:text-left text-white text-xl mb-3'>Réalisation d'une section d'introduction de landing page avec des menus déroulant. Challenge personnel provenant du site <a href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5" target={'_blank'} rel="noreferrer">Frontend Mentor.</a> </h4>
                    <div className='flex justify-center md:justify-start gap-5 mb-5'>
                        <img src={HTML} className='w-6' alt="Logo HTML5" />
                        <img src={SASS} className='w-7' alt="Logo Sass" />
                        <img src={JS} className='w-7' alt="Logo Javascript" />
                    </div>
                    <div className='flex justify-center gap-5 bg-white rounded-lg p-5 lg:mx-36 md:mx-24'>
                        <a href="https://github.com/CalcagnoLoic/dropdown_navigation_FrontendMentor" target={'_blank'} rel="noreferrer">
                            <img src={GITHUB} className='w-8 fill-white' alt="Logo Github" />
                        </a>
                        <a href="https://calcagnoloic.github.io/dropdown_navigation_FrontendMentor/" target={'_blank'} rel="noreferrer">
                            <img src={NEWTAB} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Projet 3 */} 
            <div className='flex gap-5 md:gap-0 lg:gap-0 justify-center mt-7 flex-col md:flex-row bg-dark-blue px-5 py-8 rounded-xl shadow-lg shadow-indigo-500/50'>
                <div className='basis-1/2 self-center'>
                    <a href="https://calcagnoloic.github.io/Hangman-app/" target={'_blank'} rel="noreferrer" className='cursor-default'>
                        <img src={Projet3} className='rounded-lg md:w-5/6 lg:w-3/4 m-auto cursor-pointer' alt="Projet BeCode | Hangman" />
                    </a>
                </div>
                <div className='basis-1/2 self-center'>
                    <h3 className='text-center italic underline sm:text-center md:text-left text-white text-2xl md:text-xl lg:text-2xl mb-3'>Hangman</h3>
                    <h4 className='text-center sm:text-center md:text-left text-white text-xl mb-3'>Réalisation d'un jeu 2D durant ma formation à BeCode. Ce pendu a été réalisé en Vanilla Javascript.</h4>
                    <div className='flex justify-center md:justify-start gap-5 mb-5'>
                        <img src={HTML} className='w-6' alt="Logo HTML5" />
                        <img src={SASS} className='w-7' alt="Logo Sass" />
                        <img src={JS} className='w-7' alt="Logo Javascript" />
                    </div>
                    <div className='flex justify-center gap-5 bg-white rounded-lg p-5 lg:mx-36 md:mx-24'>
                        <a href="https://github.com/CalcagnoLoic/Hangman-app" target={'_blank'} rel="noreferrer">
                            <img src={GITHUB} className='w-8 fill-white' alt="Logo Github" />
                        </a>
                        <a href="https://calcagnoloic.github.io/Hangman-app/" target={'_blank'} rel="noreferrer">
                            <img src={NEWTAB} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Projet 4 */} 
            <div className='flex gap-5 md:gap-0 lg:gap-0 justify-center mt-7 flex-col md:flex-row bg-dark-blue px-5 py-8 rounded-xl shadow-lg shadow-indigo-500/50'>
                <div className='basis-1/2 self-center'>
                    <a href="#" target={'_blank'} rel="noreferrer" className='cursor-default'>
                        <img src={Projet4} className='rounded-lg md:w-5/6 lg:w-3/4 m-auto cursor-pointer' alt="Projet perso | MovieFlix" />
                    </a>
                </div>
                <div className='basis-1/2 self-center'>
                    <h3 className='text-center italic underline sm:text-center md:text-left text-white text-2xl md:text-xl lg:text-2xl mb-3'>MovieFlix</h3>
                    <h4 className='text-center sm:text-center md:text-left text-white text-xl mb-3'>Projet fullstack personnel. Réalisation d'un petit site permettant de voir 20 films par genres. Les informations des différents films proviennent de <a href="https://www.themoviedb.org/" rel="noreferrer">l'API TMDb.</a></h4>
                    <div className='flex justify-center md:justify-start gap-5 mb-5'>
                        <img src={HTML} className='w-6' alt="Logo HTML5" />
                        <img src={SASS} className='w-7' alt="Logo Sass" />
                        <img src={JS} className='w-7' alt="Logo Sass" />
                        <img src={MYSQL} className='w-10' alt="Logo Sass" />
                        <img src={PHP} className='w-10' alt="Logo Sass" />
                    </div>
                    <div className='flex justify-center gap-5 bg-white rounded-lg p-5 lg:mx-36 md:mx-24'>
                        <a href="https://github.com/CalcagnoLoic/MovieFlix" target={'_blank'} rel="noreferrer">
                            <img src={GITHUB} className='w-8 fill-white' alt="Logo Github" />
                        </a>
                        <a href="#" target={'_blank'} rel="noreferrer">
                            <img src={NEWTAB} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects