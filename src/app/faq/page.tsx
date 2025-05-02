import { Accordion, HorizontalDivider, PageSection } from "@/ui/UtilComponents";

export default function FAQPage() {
  const questions = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsam rerum nesciunt rem temporibus explicabo tempora neque unde deserunt.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsam rerum nesciunt rem temporibus explicabo tempora neque unde deserunt.",
    },
    {
      question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsam rerum nesciunt rem temporibus explicabo tempora neque unde deserunt.",
    },
    {
      question: "Cumque voluptatum incidunt illo excepturi?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsam rerum nesciunt rem temporibus explicabo tempora neque unde deserunt.",
    },
    {
      question: "Nemo eius eaque voluptatum laborum illo maxime.",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate ipsam rerum nesciunt rem temporibus explicabo tempora neque unde deserunt.",
    },
  ];

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-4/5 flex flex-col gap-4">
        <PageSection>
          <HorizontalDivider text="Frequently Asked Questions" />
        </PageSection>
        {questions.map((question, i) => (
          <PageSection key={`questison-${i}`}>
            <Accordion title={question.question}>
              <div className="w-full flex justify-center">
                <div className="w-9/10">{question.answer}</div>
              </div>
            </Accordion>
          </PageSection>
        ))}
      </div>
    </div>
  );
}
