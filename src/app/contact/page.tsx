"use client";

import { FormField, SubmitButton } from "@/ui/FormComponents";
import { PageSection } from "@/ui/LayoutComponents";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function ContactPage() {
  return (
    <div className="w-full flex flex-wrap justify-center p-4 gap-4">
      <div className="w-full lg:w-1/5 flex flex-col gap-4 h-max lg:sticky top-4">
        <PageSection title="Call Us">
          <div className="w-4/5 mb-4">+1 (555) 123 - 4567</div>
        </PageSection>
        <PageSection title="Email Us">
          <div className="w-4/5 mb-4">
            <Link
              href="#"
              className="border-b hover:text-blue-500 hover:border-blue-500"
            >
              Service@ShopEase.com
            </Link>
          </div>
        </PageSection>
        <PageSection title="Our Address">
          <div className="w-4/5 mb-4 flex flex-col">
            <div className="w-full">1234 N. Main St</div>
            <div className="w-full">Nowhere, TX 12345</div>
          </div>
        </PageSection>
      </div>
      <div className="w-full lg:w-3/5 lg:order-first">
        <PageSection title="Contact Us">
          <div className="w-4/5 flex flex-col gap-4 m-4">
            <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-4">
              <div className="w-full">
                <FormField name="First Name" label="First Name" />
              </div>
              <div className="w-full">
                <FormField name="Last Name" label="Last Name" />
              </div>
            </div>
            <FormField name="Email" label="Email Address" />
            <textarea
              name="message"
              placeholder="Enter your message..."
              className="border w-full border-neutral-300 rounded-lg h-[200px] p-2"
            ></textarea>
            <SubmitButton text="Send Message" onClick={() => redirect("/")} />
          </div>
        </PageSection>
      </div>
    </div>
  );
}
