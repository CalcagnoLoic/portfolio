import ContactForm from "./ui/components/ContactForm";
import Presentation from "./ui/components/Presentation";
import Project from "./ui/components/Project";
import Skills from "./ui/components/Skills";
import Testimonials from "./ui/components/Testimonials";

const Page = () => {
  return (
    <>
      <section className="bg-primary text-primary hero_section">
        <Presentation />
      </section>
      <section className="bg-secondary text-primary hero_section">
        <Project />
      </section>
      <section className="bg-primary text-primary hero_section">
        <Skills />
      </section>
      <section className="bg-secondary text-primary hero_section">
        <Testimonials />
      </section>
      <section className="bg-primary text-primary hero_section">
        <ContactForm />
      </section>
    </>
  );
};

export default Page;
