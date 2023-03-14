import cv from '../assets/CV_dev.pdf';
import hamburger from '../assets/img/icon-hamburger.svg';
import close from '../assets/img/icon-close.svg';
import { useState } from 'react';

const Navbar = () => {
    // eslint-disable-next-line
    const [menu, setMenu] = useState(false);

    return (
        <nav className="flex flex-row py-6 pl-5 pr-5 sm:pl-28 sm:pr-28 justify-between xl:flex-row  bg-dark-blue">
            <div className='w-full z-20 flex justify-between'>
                <div className='flex self-center'>
                    <p id='top' className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white xl:text-left break-words">Portfolio | Calcagno Loïc</p>
                </div>
                <div onClick={() => setMenu(!menu)} className="hover:cursor-pointer md:hidden z-20 self-center">
                    <img src={hamburger} alt="Logo menu hamburger" className={`${menu === true ? 'hidden' : '' }`}/>
                    <img src={close} alt="Logo menu closed" className={`${menu === false ? 'hidden' : '' } fixed right-5 top-8`}/>
                </div>
            </div>
            
            <nav className={`fixed top-[-100vh] left-0 right-0 h-screen bg-dark-blue transition-all duration-700 md:hidden ${menu === true ? 'top-[0]' : ''}`} onClick={() => setMenu(!menu)}>
                <div className="flex flex-col gap-16 justify-center mt-5 mb-5 lg:my-5 md:my-5 sm:my-5 md:flex md:gap-10 px-5 items-center h-full" > 
                    <a className="text-white text-3xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#projects'>Projects</a>
                    <a className="text-white text-3xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#contact'>Contact</a>
                    <a href={cv} target={"_blank"} rel="noreferrer" className="text-white  hover:cursor-pointer border-white border-2 px-12 py-3 sm:px-12 xl:px-16 xl:py-3 md:px-16 md:py-3 rounded-md text-3xl hover:border-none hover:text-dark-blue hover:bg-white duration-1000">CV</a>
                </div>
            </nav>

            <nav className='hidden md:flex md:gap-12'>
                <div className="flex gap-16 self-center mt-5 mb-5 lg:my-5 md:my-5 sm:my-5 md:flex md:gap-10"> 
                    <a className="text-white text-[18px] xl:text-xl md:text-xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#projects'>Projects</a>
                    <a className="text-white text-[18px] xl:text-xl md:text-xl hover:cursor-pointer hover:italic hover:underline hover:underline-offset-[10px]" href='#contact'>Contact</a>
                </div>
                <div className="self-center mt-3 xl:mt-0">
                    <a href={cv} target={"_blank"} rel="noreferrer" className="text-white text-base hover:cursor-pointer border-white border-2 px-8 py-2 xl:px-16 xl:py-3 md:px-16 md:py-3 rounded-md text-[18px] xl:text-xl md:text-xl hover:border-none hover:text-dark-blue hover:bg-white duration-1000">CV</a>
                </div>
            </nav>
        </nav>
    );
}

export default Navbar;
