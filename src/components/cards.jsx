import { useState } from "react";
import { dataCards } from "../data/dataCards";

const Cards = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(dataCards);

    return cards.map(
        ({ id, image_project, link_project, logo_github, link_github }) => (
            <div
                className="group flex flex-col gap-5 md:gap-0 lg:gap-0 justify-center mt-7 rounded-xl overflow-hidden shadow-slate-700/50 shadow-lg"
                key={id}
            >
                <a href={link_project} target={"_blank"} rel="noreferrer">
                    <img
                        src={image_project}
                        className="w-full cursor-pointer rounded-xl hover:scale-125 transition-all duration-700 hover:opacity-30"
                        alt="Projet"
                    />
                </a>
                <div className="absolute">
                    <div className="px-14 py-3 rounded-r-full bg-transparent group-hover:bg-slate-400 duration-700">
                        <a
                            href={link_github}
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            <img
                                src={logo_github}
                                className="w-16 opacity-0 group-hover:opacity-100 duration-700"
                                alt="Logo Github"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    );
};

export { Cards };
