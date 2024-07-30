import ContactForm from "@components/Contact/ContactForm";
import ExperimentationProjects from "@components/Projects/ExperimentationProjects";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Presentation from "@components/Presentation";
import ProfessionalProjects from "@components/Projects/ProfessionalProjects";
import SectionLayout from "@layouts/SectionLayout";
import Skills from "@components/Skills";

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

      <SectionLayout css="text-white bg-tuatara pt-16">
        <ContactForm />
      </SectionLayout>
    </main>

    <Footer />
  </>
);

export default Page;
