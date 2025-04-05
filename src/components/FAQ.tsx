
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps) => {
  const faqItems = [
    {
      question: "How will I receive the PDFs after purchase?",
      answer: "Immediately after your purchase is confirmed, you'll receive an email with secure download links to access your PDF documents. You can also download them directly from your account page."
    },
    {
      question: "Are these documents specific to electrical contractors?",
      answer: "Yes, all documents are specifically tailored for electrical contractors and address the unique OSHA compliance requirements for electrical work, including specialized sections on electrical hazards and safety protocols."
    },
    {
      question: "Are updates included with my purchase?",
      answer: "Yes, you'll receive free updates to your documents for 12 months after purchase to ensure you stay compliant with any OSHA regulation changes."
    },
    {
      question: "Can I use these documents for multiple job sites?",
      answer: "Absolutely. Your purchase gives you the right to use these documents across all your company's job sites and projects. You can make as many copies as needed for your business use."
    },
    {
      question: "Do these documents help with OSHA inspections?",
      answer: "Yes. Having these documents properly filled out and readily available during an OSHA inspection demonstrates your commitment to compliance and safety, potentially reducing the risk of citations."
    }
  ];

  return (
    <section className={cn('py-16 bg-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our OSHA compliance documents
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-lg py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
