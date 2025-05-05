"use client";

import { useState } from "react";
import { RxChevronUp } from "react-icons/rx";
import Image from "next/image";

export function Accordion({
  title,
  icon,
  isOpen,
  handleChange,
  children,
}: {
  title: string;
  icon?: string | React.ReactNode;
  isOpen?: boolean;
  handleChange?: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(isOpen || false);

  const toggle = () => {
    if (isOpen !== undefined && handleChange) {
      handleChange();
      setOpen(isOpen);
    } else {
      setOpen(!open);
    }
  };

  const Icon = () => {
    if (icon) {
      if (typeof icon === "string") {
        return (
          <Image src={icon} alt={`${title} icon`} width={50} height={50} />
        );
      } else {
        return icon;
      }
    }
    return <></>;
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between w-full h-[60px] p-4 font-semibold border border-neutral-300 hover:bg-neutral-100 transition-colors duration-300"
        onClick={toggle}
        aria-expanded={open}
      >
        <div className="flex gap-2 w-4/5 items-center">
          <Icon />
          {title}
        </div>
        <RxChevronUp
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 delay-200 ease-out ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
