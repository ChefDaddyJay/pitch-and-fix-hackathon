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
    <div>
      <div
        className="flex items-center justify-between w-full h-[60px] p-4 font-semibold border border-neutral-300 hover:bg-neutral-100 transition-colors duration-300"
        onClick={toggle}
        aria-expanded={open}
      >
        <div className="flex gap-2 items-center">
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

export function FormField({
  label,
  placeholder,
  name,
  hidden,
}: {
  label?: string;
  placeholder?: string;
  name: string;
  hidden?: boolean;
}) {
  return (
    <div className="flex flex-col mb-2">
      {label ? (
        <label htmlFor={name} className="w-full font-bold">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        type={hidden ? "password" : "text"}
        name={name}
        className="w-full p-2 border border-neutral-300 rounded"
        placeholder={placeholder ? placeholder : label}
      />
    </div>
  );
}

export function SubmitButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <div
      className="w-full h-max bg-amber-500 flex flex-col justify-center items-center p-4 text-3xl font-bold rounded shadow-xl hover:bg-amber-400 transition-colors duration-300 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export function StatesOptions() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor="state" className="w-full font-bold">
        State
      </label>
      <select
        name="state"
        className="w-full p-2 border border-neutral-300 rounded"
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <div className="w-4/5 flex gap-4 text-sm my-4">
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export function AddressForm() {
  return (
    <div className="w-4/5 flex flex-col gap-2">
      <div className="text-sm text-neutral-400 pb-2">All fields required</div>
      <FormField label="Email Address" name="email" />
      <FormField label="First Name" name="firstName" />
      <FormField label="Last Name" name="lastName" />
      <FormField label="Deliver Address" name="address-1" />
      <FormField name="address-2" />
      <FormField label="City" name="city" />
      <StatesOptions />
      <FormField label="ZIP Code" name="zip" />
      <Checkbox label="Same billing address" name="sameBilling" />
    </div>
  );
}

export function HorizontalDivider({ text }: { text?: string }) {
  return (
    <div className="flex items-center justify-stretch w-4/5 my-4">
      {text ? (
        <>
          <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
          <div className="text-center text-neutral-500 font-bold flex-shrink px-4 min-w-max">
            {text}
          </div>
          <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
        </>
      ) : (
        <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
      )}
    </div>
  );
}

export function PageSection({
  title,
  cols,
  sticky,
  activeFocus,
  children,
}: {
  title?: string;
  cols?: number;
  sticky?: boolean;
  activeFocus?: boolean;
  children?: React.ReactNode;
}) {
  const columns = cols
    ? cols === 2
      ? "w-2/5"
      : cols === 3
      ? "w-1/5"
      : cols === 4
      ? "w-1/6"
      : "w-full" // cols = 1 is full, other values are not supported
    : "w-full";
  return (
    <div
      className={`h-min bg-white flex flex-col items-center gap-4 ${
        cols ? columns : "w-full"
      } ${sticky && "sticky top-4"}
      ${activeFocus && "hover:shadow-xl hover:-translate-y-2 cursor-pointer"}
      transition-all duration-300 delay-100
      `}
    >
      {title ? (
        <h3 className="w-4/5 border-b border-neutral-300 text-xl font-bold text-center p-2">
          {title}
        </h3>
      ) : (
        ""
      )}
      {children}
    </div>
  );
}
