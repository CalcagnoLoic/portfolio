import GITHUB from "../assets/img/github.png";
import GMAIL from "../assets/img/mail.ico";
import LINKEDIN from "../assets/img/linkedin.png";
import ANCHOR from "../assets/img/top.png";

const Footer = () => {
    return (
        <section>
            <div className="py-6 mx-8 lg:pl-28 lg:pr-28 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <h2 className="text-[20px] md:text-3xl xl:text-3xl sm:text-2xl text-white text-center md:text-left">
                        Portfolio | Calcagno Loïc
                    </h2>
                </div>
                <div className="flex gap-3 justify-center mt-3 sm:mt-0 md:gap-6">
                    <a
                        href="https://github.com/CalcagnoLoic"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <img
                            src={GITHUB}
                            className="w-7 sm:w-8 lg:w-10"
                            alt="Logo Github | Contact"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/loic-calcagno/"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <img
                            src={LINKEDIN}
                            className="w-7 sm:w-8 lg:w-10"
                            alt="Logo Linkedin | Contact"
                        />
                    </a>
                    <a href="mailto:calcagnoloic93@gmail.com">
                        <img
                            src={GMAIL}
                            className="w-7 sm:w-8 lg:w-10"
                            alt="Logo Gmail | Contact"
                        />
                    </a>
                </div>
            </div>

            <p className="text-white text-center text-sm hidden md:block lg:block">
                <a href="https://fr.freepik.com/vecteurs-libre/mains-utilisant-smartphone-envoyant-email_5677150.htm#query=send%20contact&position=11&from_view=search&track=ais" target="_blank" rel="noreferrer">
                    Image by studiogstock
                </a>{" "}
                on Freepik
            </p>

            <p className="text-white text-center">
                &copy; 2023 Copyright - Calcagno Loïc
            </p>

            <a href="#top" rel="norefferer" className="absolute z-0">
                <img
                    src={ANCHOR}
                    className="animate-bounce w-8 md:w-16 right-2 bottom-1 fixed md:hidden"
                    alt="Arrow up"
                />
            </a>
        </section>
    );
};

export default Footer;
