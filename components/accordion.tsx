"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { IFaq } from "@/constants/faq-content";
import cn from "@/utilities/tw-merge";

type AccordianProps = React.ComponentPropsWithoutRef<"div">;

export const Accordion: React.FC<AccordianProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("d-join d-join-vertical bg-base-100", className)}>
      {children}
    </div>
  );
};

Accordion.displayName = "Accordion";

type AccordianItemProps = React.InputHTMLAttributes<HTMLInputElement> & IFaq;

export const AccordionItem = React.forwardRef<
  HTMLInputElement,
  AccordianItemProps
>(({ name, checked, defaultChecked, question, answer }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

  const toggleInput = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = isChecked;
    }
  }, [isChecked]);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  return (
    <div
      className="d-collapse d-collapse-arrow d-join-item bg-base-100 border border-neutral border-neutral-400 hover:border-x-neutral-700 group/accordion cursor-default"
      onClick={toggleInput}
    >
      <input
        ref={inputRef}
        type={"radio"}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      <div
        className={"d-collapse-title font-semibold text-lg max-md:text-base"}
      >
        {question}
      </div>
      <div className="d-collapse-content text-base max-md:text-sm">
        {answer}
      </div>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";
