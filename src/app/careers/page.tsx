"use client";

import Hero from "@/ui/Hero";
import { PageSection } from "@/ui/LayoutComponents";

import { redirect } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { FormField, SubmitButton } from "@/ui/FormComponents";

export default function CareersPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0] || null);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const f = new File([], "abc");

  return (
    <>
      <Hero
        welcome="ShopEase Careers"
        text="Join our team!"
        buttonText="Join Today!"
        image="/images/careers_hero.jpg"
      />
      <div className="w-full flex justify-center p-4">
        <div className="w-4/5">
          <PageSection title="Start Your Application">
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
              <FormField name="LinkedIn" label="LinkedIn Profile" />
              <textarea
                name="message"
                placeholder="Tell us about yourself..."
                className="border w-full border-neutral-300 rounded-lg h-[200px] p-2"
              ></textarea>
              <div
                {...getRootProps({
                  className:
                    "border border-neutral-300 rounded p-2 text-neutral-400",
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop resume file here ...</p>
                ) : selectedFile ? (
                  <p>
                    Resume received:{" "}
                    {selectedFile && <span>{selectedFile.name}</span>}
                  </p>
                ) : (
                  <p>Drag and drop your resume or click to open Files ...</p>
                )}
              </div>

              <SubmitButton text="Apply NoW" onClick={() => redirect("/")} />
            </div>
          </PageSection>
        </div>
      </div>
    </>
  );
}
