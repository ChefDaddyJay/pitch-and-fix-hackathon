"use client";

import { redirect } from "next/navigation";
import { FormField, SubmitButton } from "./FormComponents";
import { PageSection } from "./LayoutComponents";

export default function NewsletterForm() {
  return (
    <PageSection title="Subscribe to our newsletter">
      <div className="w-3/5 flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
        <div className="w-full md:w-2/3">
          <FormField name="email" placeholder="Email Address" />
        </div>
        <div className="w-full md:w-1/4">
          <SubmitButton text="Subsribe" onClick={() => redirect("/")} />
        </div>
      </div>
    </PageSection>
  );
}
