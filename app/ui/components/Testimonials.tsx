"use client";

import { testimonials } from "@/app/data/testimonials";
import { CardsContainerMotion, CardsMotion } from "../Motion/Cards";
import { TitleMotion } from "../Motion/Title";
import { bellefair, sofia } from "../fonts";
import Image from "next/image";
import Link from "./Link";

const Testimonials = () => (
  <>
    <TitleMotion
      id="testimonials"
      className={`mb-10 text-center text-accent-primary text-2xl md:text-4xl ${sofia.className}`}
    >
      Témoignages et réussites
    </TitleMotion>

    <CardsContainerMotion>
      <div className="grid grid-cols-1 place-items-center gap-5 text-primary md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <CardsMotion
            key={testimonial.id}
            id={testimonial.id}
            className="flex h-full flex-col rounded-xl bg-cards p-8 shadow-lg"
          >
            <Image
              src={testimonial.companyImg}
              alt={testimonial.company}
              className="mx-auto mb-4 block w-1/2"
              width={200}
              height={200}
            />
            <div className="max-h-32 flex-grow overflow-auto ">
              <q className="mt-5 italic">{testimonial.text}</q>
            </div>

            <span
              className={`mt-5 2xl:mx-1/2 block m-auto text-center ${sofia.className}`}
            >{`${testimonial.name}, ${testimonial.position} chez ${testimonial.company}`}</span>

            <span className="my-4 flex justify-center gap-5 ">
              {testimonial.skills}
            </span>

            <Link
              content="Envie d'en savoir plus?"
              href={testimonial.link}
              css={`button bg-accent text-primary hover:bg-hover text-center text-lg ${bellefair.className}`}
              aria="Contact me with form or directly at calcagnoloic93@gmail.com"
              target="_blank"
            />
          </CardsMotion>
        ))}
      </div>
    </CardsContainerMotion>
  </>
);

export default Testimonials;
