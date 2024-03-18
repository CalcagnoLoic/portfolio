import Presentation from "../Presentation";
import NavBar from "../NavBar";
import SectionLayout from "../../layouts/SectionLayout";

const Component = () => (
  <SectionLayout css="bg-tuatara text-white p-12 md:px-24">
    <NavBar />
    <Presentation />
  </SectionLayout>
);

export default Component;
