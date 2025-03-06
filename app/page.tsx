import Presentation from "./ui/components/Presentation";
import Project from "./ui/components/Project";

const Page = () => {
  return (
    <>
      <section className="bg-primary text-primary">
        <Presentation />
      </section>
      <section className="bg-secondary text-primary">
        <Project />
      </section>
    </>
  );
};

export default Page;
