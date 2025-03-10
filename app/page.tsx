import ContactForm from "./ui/components/ContactForm";
import Presentation from "./ui/components/Presentation";
import Project from "./ui/components/Project";
import Skills from "./ui/components/Skills";
import Testimonials from "./ui/components/Testimonials";

const Page = () => {
  return (
    <>
      <section className="bg-primary text-primary hero-section relative overflow-hidden">
        <Presentation />
        <svg
          className="absolute bottom-0 left-0 hidden w-full sm:block"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#141E28" d="M0,70 C480,25 960,120 1440,70V100H0Z" />
        </svg>
      </section>

      <section className="bg-secondary text-primary hero-section relative overflow-hidden">
        <Project />
        <svg
          className="absolute bottom-0 left-0 hidden w-full sm:block"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#374452" d="M0,70 C480,25 960,120 1440,70V100H0Z" />
        </svg>
      </section>

      <section className="bg-primary text-primary hero-section relative overflow-hidden">
        <Skills />
        <svg
          className="absolute bottom-0 left-0 hidden w-full sm:block"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#141E28" d="M0,70 C480,25 960,120 1440,70V100H0Z" />
        </svg>
      </section>

      <section className="bg-secondary text-primary hero-section relative overflow-hidden">
        <Testimonials />
        <svg
          className="absolute bottom-0 left-0 hidden w-full sm:block"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#374452" d="M0,70 C480,25 960,120 1440,70V100H0Z" />
        </svg>
      </section>

      <section className="bg-primary text-primary hero-section relative">
        <ContactForm />
      </section>
    </>
  );
};

export default Page;
