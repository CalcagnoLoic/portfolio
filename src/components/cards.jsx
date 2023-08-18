import { useState } from "react";
import { dataCards } from "../data/dataCards";
import { IconContext } from "react-icons";

export const Cards = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(dataCards);
    return data.map(
        ({
            id,
            image_project,
            link_project,
            logo_github,
            link_github,
            title,
            explanation,
            tag1,
            tag2,
            tag3,
            logo_redirect,
        }) => (
            <div
                key={id}
                className="rounded-xl overflow-hidden shadow-slate-700/50 shadow-lg mb-8 bg-main-color"
            >
                <div className="basis-1/2 z-0">
                    <a href={link_project} target={"_blank"} rel="noreferrer">
                        <img
                            src={image_project}
                            alt={title}
                            className="w-screen rounded-t-xl transition-all duration-700 hover:opacity-70 cursor-pointer z-0"
                        />
                    </a>
                </div>
                <div className="basis-1/2 p-5 bg-main-color rounded-b-xl overflow-hidden z-10">
                    <h2 className="text-2xl font-semibold italic text-white">
                        {title}
                    </h2>
                    <h3 className="text-white mt-3">{explanation}</h3>
                    <div className="flex gap-5 mt-5">
                        <p>{tag1}</p>
                        <p>{tag2}</p>
                        {tag3 && <p>{tag3}</p>}
                    </div>
                    <div className="flex justify-center gap-5">
                        <a
                            href={link_github}
                            target={"_blank"}
                            rel="noreferrer"
                            className="flex justify-center mt-8 self-center"
                        >
                            <IconContext.Provider
                                value={{ color: "white", size: "2em" }}
                            >
                                {logo_github}
                            </IconContext.Provider>
                        </a>
                        <a
                            href={link_project}
                            target={"_blank"}
                            rel="noreferrer"
                            className="flex justify-center mt-8 self-center"
                        >
                            <IconContext.Provider
                                value={{ color: "white", size: "2em" }}
                            >
                                {logo_redirect}
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        )
    );
};
