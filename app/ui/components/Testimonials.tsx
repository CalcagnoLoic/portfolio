"use client";

import { testimonials } from "@/app/data/testimonials";
import { CardsContainerMotion, CardsMotion } from "../Motion/Cards";
import { Title } from "../Motion/Title";
import { bellefair, sofia } from "../fonts";
import Image from "next/image";
import Link from "./Link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const fadeInOut = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    if (containerRef.current) {
      setIsScrollable(
        containerRef.current.scrollHeight > containerRef.current.clientHeight,
      );
    }
  }, []);

  return (
    <>
      <Title
        id="Témoignages"
        className={`text-accent-primary mb-10 text-center text-2xl md:text-4xl ${sofia.className}`}
      >
        Témoignages et réussites
      </Title>

      <CardsContainerMotion>
        <div className="text-primary mb-6 grid grid-cols-1 place-items-center gap-5 sm:mb-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <CardsMotion
              key={testimonial.id}
              id={testimonial.id}
              className="bg-card-primary flex h-full flex-col rounded-xl p-8 shadow-lg"
            >
              <Image
                src={testimonial.companyImg}
                alt={testimonial.company}
                className="mx-auto mb-4 block rounded-full bg-white px-6 py-3"
                width={200}
                height={200}
              />

              <div
                className="bg-secondary relative max-h-32 flex-grow overflow-auto rounded"
                ref={containerRef}
              >
                <q className="text-primary block px-4 py-2 italic">
                  {testimonial.text}
                </q>
                {isScrollable && (
                  <motion.div
                    className="from-secondary pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t to-transparent"
                    style={{ opacity: fadeInOut }}
                  />
                )}
              </div>

              <span
                className={`2xl:mx-1/2 m-auto mt-5 block text-center ${sofia.className}`}
              >{`${testimonial.name}, ${testimonial.position} chez ${testimonial.company}`}</span>

              <span className="my-4 flex justify-center gap-5">
                {testimonial.skills}
              </span>

              <Link
                content="Envie d'en savoir plus?"
                href={testimonial.link}
                css={`button bg-accent-secondary text-accent text-center text-lg ${bellefair.className}`}
                aria="Contact me with form or directly at calcagnoloic93@gmail.com"
                target="_blank"
              />
            </CardsMotion>
          ))}
        </div>
      </CardsContainerMotion>
    </>
  );
};

export default Testimonials;
