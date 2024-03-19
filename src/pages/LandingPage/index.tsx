import NavBar from "../../components/NavBar";
import Presentation from "../../components/Presentation";
import SectionLayout from "../../layouts/SectionLayout";

const Page = () => (
  <>
    <NavBar />
    <SectionLayout css="text-white bg-tuatara">
      <section className="py-12">
        <Presentation />
      </section>
    </SectionLayout>
  </>
);

export default Page;
