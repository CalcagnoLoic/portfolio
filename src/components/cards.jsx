import { useState } from "react"
import { dataCards } from "../data/dataCards";

const Cards = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCards)

    return (
        cards.map(({id, image_project, link_project, logo_github, link_github}) => (
            <div className='group flex flex-col gap-5 md:gap-0 lg:gap-0 justify-center mt-7 rounded-xl overflow-hidden shadow-slate-700/50 shadow-lg' key={id}>
                <a href={link_project} target={'_blank'} rel="noreferrer">
                    <img src={image_project} className='w-full cursor-pointer rounded-xl hover:scale-125 transition-all duration-700 hover:opacity-30' alt="Projet" />
                </a>    
                <div className="absolute">
                    <div className="px-14 py-3 rounded-r-full bg-transparent group-hover:bg-slate-400 duration-700">
                        <a href={link_github} target={'_blank'} rel="noreferrer">
                            <img src={logo_github} className='w-16 opacity-0 group-hover:opacity-100 duration-700' alt="Logo Github" />
                        </a>    
                    </div>
                </div>     
            </div>
        ))
    )
}

export {Cards};

// eslint-disable-next-line no-lone-blocks
{/*
    <div className='flex flex-col gap-5 md:gap-0 lg:gap-0 justify-center mt-7 bg-dark-blue  rounded-xl shadow-lg shadow-indigo-500/50' key={id}>
        <div className='basis-1/2'>
            <a href={link_project} target={'_blank'} rel="noreferrer" className='cursor-default'>
                <img src={image_project} className='rounded-t-md w-full cursor-pointer' alt="Projet" />
            </a>
        </div>
        <div className='basis-1/2 px-5 '>
            <h3 className='text-center italic underline text-white text-2xl md:text-xl lg:text-2xl mb-3'> {title} </h3>
            <h4 className='text-center text-white text-xl mb-3'> {message} </h4>
            <div className='flex justify-center gap-5 mb-5'>
                <img src={lang1} className='w-7' alt="Logo langage"/>
                <img src={lang2} className='w-7' alt="Logo langage"/>
                <img src={lang3} className='w-7' alt="Logo langage" style = {{display: lang3 ? 'block' : 'none'}}/>
                <img src={lang4} className='w-10' alt="Logo langage" style = {{display: lang4 ? 'block' : 'none'}}/>
                <img src={lang5} className='w-10' alt="Logo langage" style = {{display: lang5 ? 'block' : 'none'}}/>
            </div>
            <div className='flex justify-center gap-5 bg-white rounded-lg p-5 mb-5 '>
                <a href={link_github} target={'_blank'} rel="noreferrer">
                    <img src={logo_github} className='w-8 fill-white' alt="Logo Github" />
                </a>
                <a href={link_project} target={'_blank'} rel="noreferrer">
                    <img src={open_view} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                </a>
            </div>
        </div>
    </div>*/}