"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get started with ExamWaliSite?",
    answer: "Getting started is easy! Simply create a free account, choose your target exam, and you'll get instant access to free mock tests and study materials. You can upgrade to a paid plan anytime to unlock premium features like video courses and mentorship.",
  },
  {
    question: "Which competitive exams does ExamWaliSite cover?",
    answer: "We cover all major competitive exams including UPSC Civil Services, SSC (CGL, CHSL, MTS), Banking (IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B), Railways (NTPC, Group D), State PCS exams, GATE, and many more. Our content is designed by subject matter experts with years of experience.",
  },
  {
    question: "Are the mock tests based on the actual exam pattern?",
    answer: "Yes, absolutely! Our mock tests are meticulously designed following the exact pattern, difficulty level, and marking scheme of actual exams. We regularly update our question bank based on the latest exam trends and previous year papers.",
  },
  {
    question: "Can I access the content on mobile devices?",
    answer: "Yes, ExamWaliSite is fully responsive and works seamlessly on all devices. We also have dedicated Android and iOS apps for a better mobile experience. You can download content for offline access and study anywhere, anytime.",
  },
  {
    question: "How does the mentorship program work?",
    answer: "Our mentorship program (available in Pro and Ultimate plans) connects you with experienced educators and successful aspirants. You get personalized guidance, study plan reviews, doubt resolution sessions, and regular progress tracking. Ultimate plan members get 1-on-1 sessions.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied with our platform for any reason, simply contact our support team within 7 days of purchase for a full refund. No questions asked.",
  },
  {
    question: "How often is the content updated?",
    answer: "Our content is continuously updated. Current affairs are updated daily, and course materials are refreshed whenever there are syllabus changes or new exam patterns. We also add new mock tests and practice questions every week.",
  },
  {
    question: "Do you provide printed study materials?",
    answer: "Currently, we focus on digital content for instant access and regular updates. However, all our PDFs and notes can be downloaded and printed. We're also working on launching printed study materials for select exams soon.",
  },
]

export function FaqSection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Got Questions?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">Frequently Asked Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about ExamWaliSite. Can&apos;t find an answer? 
            Reach out to our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-border bg-card px-6 first:rounded-t-xl last:rounded-b-xl last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="font-medium text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
