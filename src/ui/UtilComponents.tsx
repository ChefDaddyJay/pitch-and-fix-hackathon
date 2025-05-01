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
  isOpen: boolean;
  handleChange: () => void;
  children: React.ReactNode;
}) {
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
        onClick={handleChange}
        aria-expanded={isOpen}
      >
        <div className="flex gap-2 items-center">
          <Icon />
          {title}
        </div>
        <RxChevronUp
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 delay-200 ease-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export function FormField({
  label,
  name,
  hidden,
}: {
  label?: string;
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
        placeholder={label}
      />
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
