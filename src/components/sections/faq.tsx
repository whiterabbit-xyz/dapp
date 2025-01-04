import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "What is WhiteRabbit?",
    answer: "WhiteRabbit is a decentralized trading platform that connects expert traders with contributors, enabling collaborative trading and fair profit sharing through smart contracts."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply create an account, verify your identity, connect your wallet, and choose whether you want to be a trader or contributor."
  },
  {
    question: "Is my investment secure?",
    answer: "Yes, we prioritize security. All funds are managed through audited smart contracts and multi-signature wallets, with regular security audits and transparent operations."
  },
  {
    question: "How are profits distributed?",
    answer: "Profits are automatically distributed according to predefined smart contracts, with traders earning based on performance and contributors receiving returns proportional to their investments."
  },
  {
    question: "What are the fees?",
    answer: "Our fee structure is transparent and competitive. Platform fees are used to maintain and improve the platform, with a portion going to the DAO treasury for community initiatives."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[700] mb-4">Frequently Asked <span className="text-primary font-[700]">Questions</span></h2>
          <p className="text-xl text-text/60">
            Find answers to common questions about WhiteRabbit
          </p>
        </div>

        <Card className="gradient-border max-w-3xl mx-auto overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="px-6 border-b border-border/20 last:border-0">
                <AccordionTrigger className="text-primary hover:text-primary/90 font-[700]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  )
} 