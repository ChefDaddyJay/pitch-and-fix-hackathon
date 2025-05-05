"use client";

import Hero from "@/ui/Hero";
import { FormField, SubmitButton } from "@/ui/FormComponents";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { PageSection } from "@/ui/LayoutComponents";

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
      <Hero
        image="/images/partners_hero.jpg"
        welcome="Welcome ShopEase Partners"
        text=" "
        buttonText="Join Now"
        buttonLink="/partners#partnerships"
      />
      <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-4">
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-300 ${
            focus === 0 ? "flex-row" : "w-full md:w-min flex-col"
          }`}
          id="partnerships"
        >
          {programs.map((program, i) => (
            <div
              onClick={() => setFocus(i + 1)}
              className={`${
                focus === 0 ? "w-full md:w-1/4" : "w-full"
              } min-w-[300px] mb-4`}
              key={program}
            >
              <PageSection title={program} activeFocus={focus !== i + 1}>
                <Image
                  src={`/images/${program.toLowerCase()}.jpg`}
                  alt={`${program} Image`}
                  width={300}
                  height={300}
                  className="z-10"
                />
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
            focus !== 0
              ? "max-h-screen w-full md:w-[400px] lg:w-2/3 xl:w-3/4 2xl:w-4/5"
              : "max-h-0"
          } order-first md:order-none transition-max-h duration-500 ease-in overflow-hidden h-min md:sticky top-4 z-50`}
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
