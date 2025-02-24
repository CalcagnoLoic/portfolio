import { testimonials } from "@data/testimonials";

import Link from "@components/Link/Link";
import Heading from "@typographies/Heading/Heading";
import Paragraph from "@typographies/Paragraph/Paragraph";
import { CardsContainerMotion, CardsMotion, TitleMotion } from "@components/Motion/Motion";

const Component = () => (
  <>
    <TitleMotion>
      <Heading
        kind="h2"
        content="Témoignages et réussites"
        css="mb-10 text-center font-[sofia] text-2xl underline md:text-4xl"
        id="testimonials"
      />
    </TitleMotion>

    <CardsContainerMotion>
      <div className="grid grid-cols-1 place-items-center gap-5 text-white md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <CardsMotion>
            <section
              className="flex h-full flex-col rounded-xl bg-tuatara p-8 shadow-lg"
              key={testimonial.id}
            >
              <img
                src={testimonial.companyImg}
                alt={testimonial.company}
                className="mx-auto mb-4 block w-1/2"
              />
              <div className="max-h-32 flex-grow overflow-auto">
                <q className="mt-5 italic">{testimonial.text}</q>
              </div>

              <Paragraph
                kind="span"
                content={`${testimonial.name}, ${testimonial.position} chez ${testimonial.company}`}
                css="mt-5 font-[sofia] 2xl:mx-1/2 block m-auto text-center"
              />

              <span className="my-4 flex justify-center gap-5">
                {testimonial.skills}
              </span>

              <Link
                content="Envie d'en savoir plus?"
                href={testimonial.link}
                css="font-[bellefair] bg-torchRed px-10 py-3 text-lg rounded-xl w-full text-center cursor-pointer text-white hover:bg-tuatara duration-300 ease-in-out block mx-auto mt-auto"
                aria="Contact me with form or directly at calcagnoloic93@gmail.com"
                target="_blank"
              />
            </section>
          </CardsMotion>
        ))}
      </div>
    </CardsContainerMotion>
  </>
);

export default Component;
