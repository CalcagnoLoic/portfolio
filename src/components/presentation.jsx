import picture from "../assets/img/photo.png";
import { Typewriter } from "react-simple-typewriter";
import cv from "../assets/CV_dev.pdf";

const Presentation = () => {
  return (
    <section className="flex justify-center py-7 flex-col md:flex-row lg:flex-row gap-5 px-5 sm:px-5 md:px-20 lg:px-28 sm:gap-8 md:gap-16 lg:gap-16 md:py-28 pb-7 bg-section-gray">
      <article className="flex flex-col justify-center basis-1/2 lg:basis-3/5">
        <header className="flex flex-row justify-center lg:justify-start lg:pt-12">
          <p className="text-2xl text-white text-center font-[sofia] lg:text-4xl ">
            Hey, welcome
          </p>
          <span className="text-2xl animate-wave">👋</span>
        </header>
        <h1 className="text-center lg:text-start text-white text-3xl lg:text-5xl mt-2 font-[sofia] lg:py-5">
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
        <p className="text-center lg:text-start text-white text-lg leading-relaxed mt-2">
          After I taught myself to code, it became a real passion. I love
          learning new technologies and facing new challenges. I can easily
          adapt to both frontend and backend situations and switch from one to
          the other. You can find in this portfolio the achievements I am most
          proud of and thus show my abilities in this fascinating world of web
          development!
        </p>
        <footer className="flex flex-col sm:flex-row justify-center sm:justify-start mt-5 gap-5">
          <a
            href="#contact"
            className="text-white hover:cursor-pointer bg-red-element md:px-16 px-20 py-3 rounded-md text-2xl hover:border-none hover:bg-white hover:text-main-color duration-1000 font-[bellefair] sm:w-1/2 text-center self-center"
          >
            Contact Me
          </a>
          <a
            href={cv}
            target={"_blank"}
            rel="noreferrer"
            className="text-white  hover:cursor-pointer bg-red-element py-3 rounded-md text-2xl hover:border-none hover:bg-white hover:text-main-color duration-1000 font-[bellefair] sm:w-1/2 text-center self-center px-20"
          >
            CV
          </a>
        </footer>
      </article>
      <div className="basis-1/2 flex flex-col justify-center lg:basis-2/5">
        <img
          src={picture}
          alt="I am a junior web developper"
          className="w-2/3 mx-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default Presentation;
