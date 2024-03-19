import ContactInformation from "../ContactInformation";
import Form from "../../Form";
import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Heading
        kind="h2"
        id="contact"
        content="Get in touch"
        css="my-10 text-center font-[sofia] text-2xl underline md:text-4xl"
      />

      <section className="flex flex-col items-center lg:flex-row">
        <article>
          <div className="flex flex-col">
            <Paragraph
              kind="span"
              content="If you want more information about me or my work, don't hesitate
              to contact me with this contact form or directly on my email
              address."
              css="text-lg"
            />

            <Paragraph
              kind="span"
              content="I will reply as soon as possible."
              css="mt-5 text-lg"
            />
          </div>

          <div className="mt-5 flex-col">
            <ContactInformation
              icon="📩"
              content={
                <Link
                  content="calcagnoloic93@gmail.com"
                  href="mailto:calcagnoloic93@gmail.com"
                />
              }
            />
            <ContactInformation
              icon="🗺️"
              content="Belgium, Hainaut, 7170 La Hestre"
            />
          </div>
        </article>

        <Form />
      </section>
    </>
  );
};

export default Component;