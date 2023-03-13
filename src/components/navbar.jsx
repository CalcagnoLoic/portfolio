import cv from '../assets/CV_dev.pdf';

const Navbar = () => {
    return (
        <nav className="flex flex-col py-6 pl-28 pr-28 justify-between xl:flex-row bg-dark-blue">
            <div className="self-center">
                <p id='top' className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white text-center xl:text-left break-words">Portfolio | Calcagno Loïc</p>
            </div>
            <div className="flex gap-16 self-center mt-5 mb-5 lg:my-5 md:my-5 sm:my-5"> 
                <a className="text-white text-[18px] sm:text-xl xl:text-xl md:text-xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#projects'>Projects</a>
                <a className="text-white text-[18px] sm:text-xl xl:text-xl md:text-xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#contact'>Contact</a>
            </div>
            <div className="self-center mt-3 xl:mt-0">
                <a href={cv} target={"_blank"} rel="noreferrer" className="text-white text-base hover:cursor-pointer border-white border-2 px-8 py-2 sm:px-12 xl:px-16 xl:py-3 md:px-16 md:py-3 rounded-md text-[18px] sm:text-xl xl:text-xl md:text-xl hover:border-none hover:text-dark-blue hover:bg-white duration-1000">CV</a>
            </div>
        </nav>
    );
}

export default Navbar;
