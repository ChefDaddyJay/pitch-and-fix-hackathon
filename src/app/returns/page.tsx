"use client";

import {
  Accordion,
  FormField,
  HorizontalDivider,
  PageSection,
  SubmitButton,
} from "@/ui/UtilComponents";
import { redirect } from "next/navigation";

export default function ShippingPage() {
  return (
    <div className="w-full flex justify-center flex-wrap m-4 gap-4">
      <div className="w-4/5 flex flex-col gap-4">
        <PageSection>
          <Accordion title="Return / Refun Policy">
            <div className="w-full flex justify-center">
              <div className="w-9/10 flex flex-col gap-2 text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore dolorum corporis, maxime iure eius ipsum qui
                  voluptatem quas ea beatae quae consequuntur autem aspernatur
                  recusandae adipisci error voluptatibus ducimus repellendus
                  eaque a? Quam labore praesentium enim vel temporibus
                  architecto autem cupiditate dolorum illum, corporis blanditiis
                  modi quod unde corrupti qui, esse ratione nisi et nesciunt,
                  quas sequi voluptatibus? Temporibus, dolorem saepe esse
                  officia reprehenderit minima?
                </p>
                <p>
                  Assumenda nemo incidunt neque natus iste. Natus dolore ullam
                  obcaecati quod. Praesentium, officia nisi. Laborum ducimus
                  libero corporis reprehenderit exercitationem odit praesentium
                  dolores ab cupiditate nihil repellat quasi a nostrum maxime,
                  officia recusandae quae impedit dolorem ut iste veniam,
                  excepturi eius. Id voluptatibus iusto dolorum odio velit
                  laborum eveniet natus doloremque, beatae quam quisquam libero
                  quidem vitae ipsa nam mollitia ad nemo sint dolore dolores.
                  Aliquid nostrum temporibus repudiandae quos accusantium, porro
                  expedita.{" "}
                </p>
                <p>
                  Eveniet nihil distinctio voluptatum doloremque temporibus
                  dolorum beatae excepturi fugiat libero labore provident eos
                  earum maiores porro, eaque alias quasi sequi officiis error
                  voluptate sapiente dolorem! Neque esse iure quas earum
                  provident saepe, quis officia, debitis voluptates veniam
                  distinctio sunt aliquid ratione nemo iusto dolorem cupiditate,
                  reiciendis id! Voluptatum, iste temporibus sed eius illum est
                  iure repellendus! Magni, labore. Nulla, cum iste!
                </p>
              </div>
            </div>
          </Accordion>
        </PageSection>
      </div>
      <div className="w-4/5 flex gap-4">
        <div className="w-3/4">
          <PageSection title="Request Refund">
            <div className="w-4/5 flex flex-col gap-4 m-4">
              <div className="flex justify-evenly gap-4">
                <div className="w-full">
                  <FormField name="First Name" label="First Name" />
                </div>
                <div className="w-full">
                  <FormField name="Last Name" label="Last Name" />
                </div>
              </div>
              <FormField name="Email" label="Email Address" />
              <FormField name="OrderNum" label="Order Number" />
              <textarea
                name="message"
                placeholder="Describe what was wrong with the product..."
                className="border w-full border-neutral-300 rounded-lg h-[200px] p-2"
              ></textarea>
              <SubmitButton
                text="Request Refund"
                onClick={() => redirect("/")}
              />
            </div>
          </PageSection>
        </div>
        <div className="w-1/4 sticky top-4 h-max">
          <PageSection title="Call Us">
            <div className="w-4/5 mb-4">+1 (555) 123 - 4567</div>
          </PageSection>
          <PageSection title="Email Us">
            <div className="w-4/5 mb-4">
              <a
                href="#"
                className="border-b hover:text-blue-500 hover:border-blue-500"
              >
                Service@ShopEase.com
              </a>
            </div>
          </PageSection>
          <PageSection title="Our Address">
            <div className="w-4/5 mb-4 flex flex-col">
              <div className="w-full">1234 N. Main St</div>
              <div className="w-full">Nowhere, TX 12345</div>
            </div>
          </PageSection>
        </div>
      </div>
    </div>
  );
}
