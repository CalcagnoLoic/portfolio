import GITHUB from '../assets/img/github.png';
import GMAIL from '../assets/img/mail.png';
import LINKEDIN from '../assets/img/linkedin.png';

const Footer = () => {
    return (
        <div>
            <div className='py-6 mx-8 md:pl-28 md:pr-28 flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col'>
                    <h2 className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white text-center md:text-left">Portfolio | Calcagno Loïc</h2>
                    <p className='text-lg text-white text-center my-4 md:text-left md:w-72 lg:w-96'>Ce portfolio a été réalisé avec les technologies ReactJS et TailwindCSS.</p>
                </div>
                <div className='flex gap-3 justify-center mt-3 sm:mt-0 md:gap-6'>
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
            <p className="text-center text-white">
                <a href="https://www.freepik.com/free-vector/programmer-concept-illustration_8672698.htm#query=web%20development&position=46&from_view=search&track=ais" target={"_blank"} rel="noreferrer">Images de storyset </a> 
                sur Freepik</p>
            <p className="text-white text-center">&copy; 2023 Copyright - Calcagno Loïc</p>
        </div>
    )
}

export default Footer;