"use client";

import { CardsContainerMotion, CardsMotion } from "../Motion/Cards";
import { motion, useScroll, useTransform } from "motion/react";
import { sofia } from "../fonts";
import { testimonials } from "@/app/data/testimonials";
import { Title } from "../Motion/Title";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

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
        className={`text-accent-primary mb-10 text-center text-2xl [text-shadow:_0_2px_4px_rgba(255,255,255,0.5)] md:text-4xl ${sofia.className}`}
      >
        Témoignages et réussites
      </Title>

      <CardsContainerMotion>
        <div className="text-primary mb-6 grid grid-cols-1 place-items-center gap-5 sm:mb-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <a
              href="https://www.linkedin.com/in/loic-calcagno/"
              target="_blank"
              key={testimonial.id}
              className="transition duration-300 ease-in-out hover:scale-105"
            >
              <CardsMotion
                key={testimonial.id}
                id={testimonial.id}
                className="bg-card-primary flex h-full flex-col rounded-xl p-8 shadow-lg shadow-[#364351]"
              >
                <Image
                  src={testimonial.companyImg}
                  alt={testimonial.company}
                  className="mx-auto mb-4 block rounded-full bg-white px-6 py-3"
                  width={200}
                  height={200}
                />

                <span
                  className={`2xl:mx-1/2 m-auto mb-4 block text-center ${sofia.className}`}
                >{`${testimonial.name}, ${testimonial.position}`}</span>

                <span className="mb-4 flex justify-center gap-5">
                  {testimonial.skills}
                </span>

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
              </CardsMotion>
            </a>
          ))}
        </div>
      </CardsContainerMotion>
    </>
  );
};

export default Testimonials;
