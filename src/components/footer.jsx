import { BsLinkedin, BsGithub, BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <section>
            <p className="text-white text-center">
                &copy; 2023 Copyright - Calcagno Loïc
            </p>
            <IconContext.Provider value={{ color: "white", size: "1em" }}>
                <div className="flex justify-center mt-5 gap-5">
                    <a
                        href="https://www.linkedin.com/in/loic-calcagno/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://github.com/CalcagnoLoic"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub />
                    </a>
                </div>
            </IconContext.Provider>

            <a href="#top" rel="norefferer" className="absolute z-0">
                <IconContext.Provider value={{color: "#FF0F25", size: "2em"}}>
                    <BsFillArrowUpCircleFill className=" w-8 md:w-16 right-2 bottom-1 fixed md:hidden" />
                </IconContext.Provider>
            </a>
        </section> //
    );
};

export default Footer;
