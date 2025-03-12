"use client";

import Form from "@/app/container/Form";
import { FormMotion } from "../Motion/Form";
import { Title } from "../Motion/Title";
import { sofia } from "../fonts";
import Link from "./Link";
import ContactInformation from "./ContactInformation";

const ContactForm = () => (
  <>
    <Title
      id="contact"
      className={`text-accent-primary text-center text-2xl md:text-4xl ${sofia.className}`}
    >
      Restons en contact!
    </Title>

    <FormMotion>
      <article className="lg:mr-16">
        <div className="flex flex-col">
          <p className="text-lg">
            Si vous voulez plus d&apos;informations à propos de moi ou de mon
            travail, n&apos;hésitez pas à me contacter directement par mail ou
            via ce formulaire de contact.
          </p>

          <p className="mt-5 text-lg">
            J&apos;y répondrai aussi vite que possible.
          </p>
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
    </FormMotion>
  </>
);

export default ContactForm;
