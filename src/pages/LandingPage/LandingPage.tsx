import ContactForm from "@components/Contact/ContactForm/ContactForm";
import ExperimentationProjects from "@components/Projects/ExperimentationProjects/ExperimentationProjects";
import Footer from "@components/Footer/Footer";
import NavBar from "@components/NavBar/NavBar";
import Presentation from "@components/Presentation/Presentation";
import ProfessionalProjects from "@components/Projects/ProfessionalProjects/ProfessionalProjects";
import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import Skills from "@components/Skills/Skills";
import Testimonials from "@components/Testimonials/Testimonials";

const Page = () => (
  <>
    <NavBar />

    <main>
      <SectionLayout css="text-white bg-tuatara">
        <Presentation />
      </SectionLayout>

      <SectionLayout css="text-tuatara py-16">
        <ProfessionalProjects />
      </SectionLayout>

      <SectionLayout css="text-white bg-tuatara py-16">
        <ExperimentationProjects />
      </SectionLayout>

      <SectionLayout css="text-tuatara py-16">
        <Skills />
      </SectionLayout>

      <SectionLayout css="text-white bg-tuatara py-16">
        <Testimonials />
      </SectionLayout>

      <SectionLayout css="text-tuatara py-16">
        <ContactForm />
      </SectionLayout>
    </main>

    <Footer />
  </>
);

export default Page;
