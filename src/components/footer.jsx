import GITHUB from '../assets/img/github.png';
import GMAIL from '../assets/img/mail.png';
import LINKEDIN from '../assets/img/linkedin.png';

const Footer = () => {
    return (
        <div>
            <div className='py-6 pl-28 pr-28 flex'>
                <div>
                    <h2 className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white text-center xl:text-left">Portfolio | Calcagno Loïc</h2>
                    <p></p>
                </div>
                <div>
                    <h3>Mes réseaux</h3>
                    <div>

                    </div>
                </div>
            </div>
            <p className="text-center text-white">
                <a href="https://www.freepik.com/free-vector/programmer-concept-illustration_8672698.htm#query=web%20development&position=46&from_view=search&track=ais" target={"_blank"} rel="noreferrer">Image by storyset </a> 
            on Freepik</p>
            <p className="text-white text-center">&copy; 2023 Copyright - Calcagno Loïc</p>
        </div>
    )
}

export default Footer;