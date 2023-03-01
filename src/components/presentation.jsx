import picture from '../assets/img/developer.png';
import GITHUB from '../assets/img/github.png';
import GMAIL from '../assets/img/mail.png';
import LINKEDIN from '../assets/img/linkedin.png';
import { Typewriter } from 'react-simple-typewriter';


const Presentation = () => {
    return (
        <div className='flex justify-center mt-7 flex-col md:flex-row lg:flex-row gap-5 px-5 sm:px-5 md:px-28 lg:px-28 sm:gap-8 md:gap-16 lg:gap-16' >
            <div className='flex flex-col justify-center basis-1/2'>
                <div className='flex flex-row justify-center'>
                    <p className='text-2xl text-dark-blue text-center'>Hey, bienvenue</p>
                    <span className='text-2xl animate-wave'>👋</span>
                </div>
                <h1 className='text-center text-dark-blue text-2xl mt-2'>Je suis
                <span className='italic text-2xl md:text-3xl font-bold break-words'>
                    <Typewriter
                    loop
                    cursor
                    cursorStyle='|'
                    words={[' <développeur web junior />']}
                    deleteSpeed={40}
                    delaySpeed={2500}
                    />
                </span>
                </h1>
                <p className='text-center text-dark-blue text-xl leading-relaxed mt-2'>Vous pouvez retrouver dans ce portfolio les réalisations dont je suis le plus fier et ainsi montrer mes capacités dans ce monde magnifique du développement web!</p>
                <div className='flex justify-center mt-3 gap-5'>
                    <a href="https://github.com/CalcagnoLoic" target={'_blank'} rel="noreferrer">
                        <img src={GITHUB} className='w-7 sm:w-8 lg:w-10' alt="Logo Github | Contact" />
                    </a>
                    <a href="https://www.linkedin.com/in/loic-calcagno/" target={'_blank'} rel="noreferrer">
                        <img src={LINKEDIN} className='w-7 sm:w-8 lg:w-10' alt="Logo Linkedin | Contact" />
                    </a>
                    <a href="mailto:calcagnoloic93@gmail.com">
                        <img src={GMAIL} className='w-7 sm:w-8 lg:w-10' alt="Logo Gmail | Contact" />
                    </a>
                </div>
            </div>
            <div className='basis-1/2'>
                <img src={picture} alt="I'm a dev" className='mx-auto'/>
            </div>
        </div>
    )
}

export default Presentation;