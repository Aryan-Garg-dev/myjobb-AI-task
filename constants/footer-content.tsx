import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa6";
import React from "react";
import { contact, socials } from "@/constants/index";

interface IContactDetail {
  Icon: React.ReactElement;
  href: string;
  value: string;
}

export const contactDetails: IContactDetail[] = [
  {
    Icon: <PhoneIcon className={"size-6"} />,
    href: contact.phno.link,
    value: contact.phno.value,
  },
  {
    Icon: <MailIcon className={"size-6"} />,
    href: contact.email.link,
    value: contact.email.value,
  },
  {
    Icon: <MapPinnedIcon className={"size-6"} />,
    href: contact.address.link,
    value: contact.address.value,
  },
];

export const socialDetails: IContactDetail[] = [
  {
    Icon: <FaGithub className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.github,
    value: "Github",
  },
  {
    Icon: <FaMedium className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.medium,
    value: "Medium",
  },
  {
    Icon: <FaTwitter className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.twitter,
    value: "Twitter",
  },
  {
    Icon: <FaLinkedin className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.linkedin,
    value: "Linkedin",
  },
  {
    Icon: <FaInstagram className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.instagram,
    value: "Instagram",
  },
  {
    Icon: <FaDiscord className={"size-6 max-md:group-hover:text-white"} />,
    href: socials.discord,
    value: "Discord",
  },
];
