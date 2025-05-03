"use client";

import { redirect } from "next/navigation";
import { FormField, PageSection, SubmitButton } from "./UtilComponents";

export default function NewsletterForm() {
  return (
    <PageSection title="Subscribe to our newsletter">
      <div className="w-3/5 flex justify-between items-center gap-4 pb-4">
        <div className="w-3/4">
          <FormField name="email" placeholder="Email Address" />
        </div>
        <div className="w-1/4">
          <SubmitButton text="Subsribe" onClick={() => redirect("/")} />
        </div>
      </div>
    </PageSection>
  );
}
