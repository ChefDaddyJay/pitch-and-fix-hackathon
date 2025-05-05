import { PageSection } from "@/ui/LayoutComponents";
import { Accordion } from "@/ui/Accordion";

export default function TermsPage() {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-4/5 flex flex-col gap-4">
        <PageSection>
          <Accordion title="Terms and Conditions">
            <div className="w-full flex justify-center">
              <div className="w-9/10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  molestiae quidem doloribus adipisci perspiciatis dolorum
                  nostrum ipsa temporibus officia vero, expedita odit explicabo
                  facere, impedit accusantium! Unde voluptas repudiandae
                  deleniti id pariatur at, nesciunt praesentium quia expedita
                  neque ullam magni ducimus quas architecto ea, aut dolor sit
                  distinctio! Facere, voluptate.
                </p>
              </div>
            </div>
          </Accordion>
        </PageSection>
        <PageSection>
          <Accordion title="Privacy Policy">
            <div className="w-full flex justify-center">
              <div className="w-9/10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  molestiae quidem doloribus adipisci perspiciatis dolorum
                  nostrum ipsa temporibus officia vero, expedita odit explicabo
                  facere, impedit accusantium! Unde voluptas repudiandae
                  deleniti id pariatur at, nesciunt praesentium quia expedita
                  neque ullam magni ducimus quas architecto ea, aut dolor sit
                  distinctio! Facere, voluptate.
                </p>
              </div>
            </div>
          </Accordion>
        </PageSection>
        <PageSection>
          <Accordion title="User Agreement">
            <div className="w-full flex justify-center">
              <div className="w-9/10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  molestiae quidem doloribus adipisci perspiciatis dolorum
                  nostrum ipsa temporibus officia vero, expedita odit explicabo
                  facere, impedit accusantium! Unde voluptas repudiandae
                  deleniti id pariatur at, nesciunt praesentium quia expedita
                  neque ullam magni ducimus quas architecto ea, aut dolor sit
                  distinctio! Facere, voluptate.
                </p>
              </div>
            </div>
          </Accordion>
        </PageSection>
        <PageSection>
          <Accordion title="Return / Refun Policy">
            <div className="w-full flex justify-center">
              <div className="w-9/10 text-justify">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  molestiae quidem doloribus adipisci perspiciatis dolorum
                  nostrum ipsa temporibus officia vero, expedita odit explicabo
                  facere, impedit accusantium! Unde voluptas repudiandae
                  deleniti id pariatur at, nesciunt praesentium quia expedita
                  neque ullam magni ducimus quas architecto ea, aut dolor sit
                  distinctio! Facere, voluptate.
                </p>
              </div>
            </div>
          </Accordion>
        </PageSection>
      </div>
    </div>
  );
}
