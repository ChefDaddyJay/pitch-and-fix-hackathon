"use client";

import { FormField, SubmitButton } from "@/ui/FormComponents";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageSection } from "@/ui/LayoutComponents";
import { RefundPolicy } from "@/ui/Policies";

export default function ShippingPage() {
  return (
    <div className="w-full flex justify-center flex-wrap p-4 gap-4">
      <div className="w-4/5">
        <RefundPolicy />
      </div>
      <div className="w-4/5 flex flex-wrap lg:flex-nowrap gap-4">
        <div className="w-full lg:w-3/4">
          <PageSection title="Request Refund">
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
        <div className="w-full lg:w-1/4 lg:sticky top-4 h-max">
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
      </div>
    </div>
  );
}
