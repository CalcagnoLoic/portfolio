import ContactInformation from "../ContactInformation";
import Form from "../../Form";
import Heading from "../../../typographies/Heading";
import Link from "../../Link";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => (
  <>
    <Heading
      kind="h2"
      id="contact"
      content="Get in touch"
      css=" text-center font-[sofia] text-2xl underline md:text-4xl"
    />

    <section className="mt-5 flex flex-col items-center pb-5 lg:mt-2 lg:flex-row">
      <article className="lg:mr-16">
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

export default Component;
