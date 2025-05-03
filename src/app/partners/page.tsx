"use client";

import Hero from "@/ui/Hero";
import { FormField, PageSection, SubmitButton } from "@/ui/UtilComponents";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function PartnersPage() {
  const [focus, setFocus] = useState(0);
  const programs = [
    "Employees",
    "Affiliates",
    "Technology Partners",
    "Category1",
    "Category2",
  ];

  return (
    <>
      <Hero />
      <div className="w-full flex justify-center gap-4 m-4">
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-300 ${
            focus === 0 ? "max-w-4/5 flex-row" : "w-1/5 flex-col"
          }`}
        >
          {programs.map((program, i) => (
            <div
              onClick={() => setFocus(i + 1)}
              className={`${focus === i + 1 ? "order-1" : "order-last"} ${
                focus === 0 ? "w-1/4" : "w-full"
              } transition-[order] duration-300 w-1/4`}
              key={program}
            >
              <PageSection title={program} activeFocus={focus !== i + 1}>
                <div className="z-10">
                  <Image
                    src={`/images/${program.toLowerCase()}.jpg`}
                    alt={`${program} Image`}
                    width={300}
                    height={300}
                  />
                </div>
                <div
                  className={`w-4/5 overflow-hidden ${
                    focus === i + 1 || focus === 0
                      ? "max-h-screen m-4"
                      : "max-h-0 m-0 -translate-y-20"
                  }
                transition-max-height duration-300`}
                  aria-expanded={focus === 1 || focus === 0}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda aut ratione reiciendis atque? In repudiandae
                  quisquam odit, tempora explicabo laborum!
                </div>
              </PageSection>
            </div>
          ))}
        </div>
        <div
          className={`${
            focus !== 0 ? "max-w-screen w-3/4 delay-0" : "max-w-0 delay-200"
          } transition-max-w duration-500 ease-in overflow-x-hidden`}
        >
          <PageSection title={`${programs[focus - 1]} Sign In`}>
            <div className="w-4/5 flex flex-col gap-4 pb-4">
              <FormField name="username" label="Partner ID" />
              <FormField name="password" label="Password" hidden={true} />
              <SubmitButton text="Sign In" onClick={() => redirect("/")} />
            </div>
          </PageSection>
        </div>
      </div>
    </>
  );
}
