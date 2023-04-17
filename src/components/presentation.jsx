import picture from "../assets/img/photo.png";
import GITHUB from "../assets/img/github.png";
import GMAIL from "../assets/img/mail.ico";
import LINKEDIN from "../assets/img/linkedin.png";
import { Typewriter } from "react-simple-typewriter";

const Presentation = () => {
    return (
        <section className="flex justify-center py-7 flex-col md:flex-row lg:flex-row gap-5 px-5 sm:px-5 md:px-28 lg:px-28 sm:gap-8 md:gap-16 lg:gap-16 md:pt-52 lg:pt-40 pb-7">
            <article className="flex flex-col justify-center basis-1/2 lg:basis-3/5">
                <header className="flex flex-row justify-center">
                    <p className="text-2xl text-dark-blue text-center font-[sofia] lg:text-4xl">
                        Hey, welcome
                    </p>
                    <span className="text-2xl animate-wave">👋</span>
                </header>
                <h1 className="text-center text-dark-blue text-3xl lg:text-5xl mt-2 font-[sofia]">
                    I am
                    <span className="text-3xl md:text-3xl lg:text-5xl font-bold break-words">
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            words={[" <junior web developer /> "]}
                            deleteSpeed={40}
                            delaySpeed={2500}
                        />
                    </span>
                </h1>
                <p className="text-center text-dark-blue text-lg leading-relaxed mt-2">
                    After I taught myself to code, it became a real passion. I
                    love learning new technologies and facing new challenges. I
                    can easily adapt to both frontend and backend situations and
                    switch from one to the other. You can find in this portfolio
                    the achievements I am most proud of and thus show my
                    abilities in this fascinating world of web development!
                </p>
                <footer className="flex justify-center mt-5 gap-5">
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
                </footer>
            </article>
            <div className="basis-1/2 flex flex-col justify-center lg:basis-2/5">
                <img src={picture} alt="I am a junior web developper" className="mx-auto rounded-full" />
            </div>
        </section>
    );
};

export default Presentation;
