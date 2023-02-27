import github from '../assets/img/github.png';
import git from '../assets/img/git.png';
import figma from '../assets/img/figma.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import sass from '../assets/img/sass.png';
import js from '../assets/img/js.png';
import php from '../assets/img/php.png';
import python from '../assets/img/python.png';
import tailwind from '../assets/img/tailwind.png';
import react from '../assets/img/react.png';
import django from '../assets/img/django.png';

const Skills = () => {
    return(
        <div className='px-28 mb-10'>
            <h2 className="text-center text-dark-blue my-10 text-3xl" id="tech">Les technologies que j'utilise :</h2>
            <div className="flex gap-7 overflow-hidden">
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={github} className='w-5' alt="" />
                    <p className='text-dark-blue'>Github</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={git} className='w-5' alt="" />
                    <p className='text-dark-blue'>Git</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 rounded-xl lg:px-16 xl:px-16 justify-center'>
                    <img src={figma} className='w-5' alt="" />
                    <p className='text-dark-blue'>Figma</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={html} className='w-5' alt="" />
                    <p className='text-dark-blue'>HTML5</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={css} className='w-5' alt="" />
                    <p className='text-dark-blue'>CSS3</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={sass} className='w-5' alt="" />
                    <p className='text-dark-blue'>SASS</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={js} className='w-5' alt="" />
                    <p className='text-dark-blue'>JavaScript</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={php} className='w-7' alt="" />
                    <p className='text-dark-blue'>PHP</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={python} className='w-5' alt="" />
                    <p className='text-dark-blue'>Python</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={tailwind} className='w-7' alt="" />
                    <p className='text-dark-blue'>Tailwind</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={react} className='w-5' alt="" />
                    <p className='text-dark-blue'>React</p>
                </div>
                <div className='flex gap-2 border-2 border-dark-blue px-10 sm:px-16 py-5 lg:px-16 xl:px-16 rounded-xl justify-center'>
                    <img src={django} className='w-5' alt="" />
                    <p className='text-dark-blue'>Django</p>
                </div>
            </div>
        </div>

        
    )
}

export default Skills;