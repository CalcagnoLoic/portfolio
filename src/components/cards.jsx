import { useState } from "react"
import { dataCards } from "./dataCards"


const Cards = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCards)

    return (
        cards.map(({id, image_project, link_project, title, message, lang1, lang2, logo_github, open_view, link_github, lang3, lang4, lang5}) => (
            <div className='flex gap-5 md:gap-0 lg:gap-0 justify-center mt-7 flex-col md:flex-row bg-dark-blue px-5 py-8 rounded-xl shadow-lg shadow-indigo-500/50' key={id}>
                <div className='basis-1/2 self-center'>
                    <a href={link_project} target={'_blank'} rel="noreferrer" className='cursor-default'>
                        <img src={image_project} className='rounded-lg md:w-5/6 lg:w-3/4 m-auto cursor-pointer' alt="Projet" />
                    </a>
                </div>
                <div className='basis-1/2 self-center'>
                    <h3 className='text-center italic underline sm:text-center md:text-left text-white text-2xl md:text-xl lg:text-2xl mb-3'> {title} </h3>
                    <h4 className='text-center sm:text-center md:text-left text-white text-xl mb-3'> {message} </h4>
                    <div className='flex justify-center md:justify-start gap-5 mb-5'>
                        <img src={lang1} className='w-6' alt="Logo langage"/>
                        <img src={lang2} className='w-7' alt="Logo langage"/>
                        <img src={lang3} className='w-7' alt="Logo langage" style = {{display: lang3 ? 'block' : 'none'}}/>
                        <img src={lang4} className='w-10' alt="Logo langage" style = {{display: lang4 ? 'block' : 'none'}}/>
                        <img src={lang5} className='w-10' alt="Logo langage" style = {{display: lang5 ? 'block' : 'none'}}/>
                    </div>
                    <div className='flex justify-center gap-5 bg-white rounded-lg p-5 lg:mx-36 md:mx-24'>
                        <a href={link_github} target={'_blank'} rel="noreferrer">
                            <img src={logo_github} className='w-8 fill-white' alt="Logo Github" />
                        </a>
                        <a href={link_project} target={'_blank'} rel="noreferrer">
                            <img src={open_view} className='w-8 fill-white' alt="Logo | Ouvrir le projet dans une nouvelle fenêtre" />
                        </a>
                    </div>
                </div>
            </div>
        ))
    )
}

export {Cards};