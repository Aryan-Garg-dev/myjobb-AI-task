import React from "react";
import { Accordion, AccordionItem } from "@/components/accordion";
import { faq } from "@/constants/faq-content";
import Link from "next/link";
import { contact, socials } from "@/constants";
import PlusCorners from "@/components/plus-corners";

const FaqSection = () => {
  return (
    <section className={"section-container"} id={"faq"}>
      <div
        className={"section section-gradient-light flex-center flex-col gap-4"}
      >
        <div>
          <h2
            className={
              "font-label text-center text-3xl max-md:text-2xl font-semibold px-2 mb-3"
            }
          >
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion className={"relative max-w-3xl group"}>
          <PlusCorners className={"z-10 group-hover:text-neutral-600"} />
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              name={"faq"}
              key={index}
              question={question}
              answer={answer}
            />
          ))}
        </Accordion>
        <p className={"max-md:text-sm text-center"}>
          Have another question? Contact us on{" "}
          <Link href={socials.twitter} className={"d-link"}>
            Twitter
          </Link>{" "}
          or by{" "}
          <Link href={contact.email.link} className={"d-link"}>
            email
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
export default FaqSection;
