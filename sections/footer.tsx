import React from "react";
import Link from "next/link";
import { contactDetails, socialDetails } from "@/constants/footer-content";

const Footer = () => {
  return (
    <div className={"section-container flex flex-col font-sans"} id={"footer"}>
      {/* Branding */}
      <div
        className={
          "section flex max-md:flex max-md:flex-col bg-base-100 md:px-5"
        }
      >
        <div
          className={
            "pt-2 flex-1 flex flex-col gap-1 justify-start max-md:pb-2 max-md:border-b-neutral"
          }
        >
          <p className={"text-3xl font-semibold font-sans select-none"}>
            Resume AI
          </p>
          <p className={"flex flex-wrap gap-x-1"}>
            <span>Polish your resume.</span>
            <span>Unlock bigger opportunities.</span>
          </p>
        </div>

        {/* Contact Details */}
        <div
          className={
            "flex-[1.5] flex justify-around items-start gap-4 max-md:grid max-md:grid-cols-2 max-md:mt-4 max-md:gap-5"
          }
        >
          <div className={"max-md:self-center"}>
            <p
              className={
                "mt-2 mb-4 text-lg max-md:text-base font-semibold font-label max-md:my-3"
              }
            >
              Contact Us
            </p>
            <div className={"flex flex-col items-start gap-3 text-sm"}>
              {contactDetails.map((contact, index) => (
                <Link href={contact.href} className={"flex gap-3"} key={index}>
                  {contact.Icon}
                  <p
                    className={
                      "max-md:text-xs w-full break-all overflow-visible whitespace-normal font-sans hover:underline hover:underline-offset-2"
                    }
                  >
                    {contact.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className={"max-md:self-center"}>
            <p
              className={
                "mt-2 mb-4 max-md:my-3 text-lg max-md:text-base font-label font-semibold"
              }
            >
              Socials
            </p>
            <div
              className={
                "flex flex-col max-md:grid max-md:grid-cols-3 w-fit items-start gap-3 max-md:gap-0 text-sm max-md:border-b-neutral max-md:place-items-start max-md:pb-5"
              }
            >
              {socialDetails.map((social, index) => (
                <Link
                  className={
                    "flex gap-3 w-fit h-fit max-md:border-neutral max-md:p-2 group max-md:hover:bg-black"
                  }
                  key={index}
                  href={social.href}
                  target={"_blank"}
                >
                  {social.Icon}
                  <p
                    className={
                      "max-md:hidden hover:underline hover:underline-offset-2"
                    }
                  >
                    {social.value}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={
          "section px-4 py-4 md:py-6 flex justify-between items-center text-sm max-md:text-xs border-t-neutral max-md:flex-col max-md:text-center max-md:gap-2"
        }
      >
        <p>2025 © Resume AI. All rights reserved.</p>
        <p>
          Built with ❤️ by{" "}
          <Link
            href={"https://myjobb.ai"}
            className={"hover:underline hover:underline-offset-2"}
          >
            myjobb
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Footer;
