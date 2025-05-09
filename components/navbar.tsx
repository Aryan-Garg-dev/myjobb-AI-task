"use client";

import React, { useEffect, useState } from "react";
import useScrolled from "@/hooks/use-scrolled-top";
import cn from "@/utilities/tw-merge";
import Image from "next/image";
import { AlignJustifyIcon, XIcon } from "lucide-react";
import useBreakpoint from "@/hooks/use-breakpoint";
import { scrollToSection } from "@/utilities/scroll";

const Navbar = () => {
  const { direction, scrolled } = useScrolled(40);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { deviceType } = useBreakpoint();

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const mobileNavigate = (sectionId: string) => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (deviceType === "desktop") setIsMenuOpen(false);
  }, [deviceType]);

  return (
    <>
      <nav
        className={cn(
          "z-50 fixed top-0 w-full transition-transform duration-300 flex-center border-b-neutral bg-base-200 shadow-sm",
          scrolled && !isMenuOpen && direction === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        )}
      >
        <div
          className={
            "w-wrapper bg-gradient-to-r from-base-100 via-white to-base-100 flex justify-between px-4 py-4 border-x-neutral"
          }
        >
          {/* Branding */}
          <div className={"flex items-center gap-2"}>
            <Image
              src={"/logo.svg"}
              alt={"logo"}
              height={40}
              width={40}
              className={"size-10 max-lg:size-9 max-md:size-8"}
            />
            <h1
              className={
                "text-2xl max-lg:text-xl max-md:text-lg font-semibold tracking-tight select-none"
              }
              onClick={scrollToTop}
            >
              Resume AI
            </h1>
          </div>

          {/* Section Redirects */}
          <div className={"flex flex-1 justify-center max-lg:hidden"}>
            <button className={"btn-dash"}>Features</button>
            <button
              className={"btn-dash"}
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </button>
            <button
              className={"btn-dash"}
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </button>
            <button className={"btn-dash"}>About Us</button>
            <button
              className={"btn-dash"}
              onClick={() => scrollToSection("footer")}
            >
              Contact
            </button>
          </div>

          {/* Menu Button for small devices */}
          <button
            className={
              "btn-outline h-full lg:hidden py-2 transition-all duration-300"
            }
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <AlignJustifyIcon className={"size-4"} />
            ) : (
              <XIcon className={"size-4"} />
            )}
          </button>

          {/* Actions */}
          <div
            className={
              "border-[0.5px] border-neutral-100 flex flex-nowrap max-lg:hidden"
            }
          >
            <button className={"btn-outline"}>Login</button>
            <button
              className={"btn-outline bg-accent text-base-100 border-accent"}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Menu options for smaller devices */}
      {(deviceType === "tablet" || deviceType === "mobile") && (
        <div
          className={cn(
            "fixed top-0 z-20 h-[calc(100vh-65px)] w-full border-t-neutral bg-base-200 transition-transform duration-400 flex justify-center",
            !isMenuOpen ? "-translate-y-full" : "mt-[65px] translate-y-0"
          )}
        >
          <div
            className={
              "w-wrapper py-10 h-fit border-[0.5px] border-neutral-100 flex flex-col gap-5"
            }
          >
            <div className={"flex flex-col w-full gap-1"}>
              <button className={"btn-outline py-4 border-dotted"}>
                Features
              </button>
              <button
                className={"btn-outline py-4 border-dotted"}
                onClick={() => mobileNavigate("pricing")}
              >
                Pricing
              </button>
              <button
                className={"btn-outline py-4 border-dotted"}
                onClick={() => mobileNavigate("faq")}
              >
                FAQ
              </button>
              <button className={"btn-outline py-4 border-dotted"}>
                About Us
              </button>
              <button
                className={"btn-outline py-4 border-dotted"}
                onClick={() => mobileNavigate("footer")}
              >
                Contact
              </button>
            </div>
            <div className={"flex flex-col w-full"}>
              <button className={"btn-outline py-4"}>Login</button>
              <button
                className={
                  "btn-outline py-4 bg-accent text-base-100 border-accent"
                }
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
