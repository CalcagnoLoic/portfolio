import NavBar from "../../components/NavBar";
import Presentation from "../../components/Presentation";
import SectionLayout from "../../layouts/SectionLayout";
import ProfessionalProjects from "../../components/Projects/ProfessionalProjects";
import ExperimentationProjects from "../../components/Projects/ExperimentationProjects";
import CardSkills from "../../components/Cards/CardSkills";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "../../components/Footer";

const Page = () => (
  <>
    <NavBar />

    <main>
      <SectionLayout css="text-white bg-tuatara">
        <Presentation />
      </SectionLayout>

      <SectionLayout css="text-tuatara">
        <ProfessionalProjects />
      </SectionLayout>

      <SectionLayout css="text-white bg-tuatara">
        <ExperimentationProjects />
      </SectionLayout>

      <SectionLayout css="text-tuatara">
        <CardSkills />
      </SectionLayout>

      <SectionLayout css="text-white bg-tuatara">
        <ContactForm />
      </SectionLayout>
    </main>

    <Footer />
  </>
);

export default Page;
