import ContactInformation from "@components/Contact/ContactInformation/ContactInformation";
import Form from "@container/Form/Form";
import Link from "@components/Link/Link";
import Heading from "@typographies/Heading/Heading";
import Paragraph from "@typographies/Paragraph/Paragraph";
import { FormMotion, TitleMotion } from "@components/Motion/Motion";

const Component = () => (
  <>
    <TitleMotion>
      <Heading
        kind="h2"
        id="contact"
        content="Restons en contact!"
        css=" text-center font-[sofia] text-2xl underline md:text-4xl"
      />
    </TitleMotion>

    <FormMotion>
      <section className="mt-5 flex flex-col items-center lg:mt-2 lg:flex-row">
        <article className="lg:mr-16">
          <div className="flex flex-col">
            <Paragraph
              kind="span"
              content="Si vous voulez plus d'informations à propos de moi ou de mon travail, n'hésitez pas à me contacter  directement par mail ou via ce formulaire de contact."
              css="text-lg"
            />

            <Paragraph
              kind="span"
              content="J'y répondrai aussi vite que possible."
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
              content="Belgique, Hainaut, 7170 La Hestre"
            />
          </div>
        </article>

        <Form />
      </section>
    </FormMotion>
  </>
);

export default Component;
