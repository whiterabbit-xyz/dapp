'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Connect Your Wallet",
    description: "Link your crypto wallet to get started and join our community.",
    color: "primary"
  },
  {
    number: "02",
    title: "Create Your Profile",
    description: "Set up your user profile to personalize your experience.",
    color: "primary"
  },
  {
    number: "03",
    title: "Choose Your Path",
    description: "Decide whether you want to Create a Trading DAO or Contribute to Existing DAOs in the ecosystem.",
    color: "primary"
  },
  {
    number: "04",
    title: "Start Trading or Contributing",
    description: "Begin managing your own DAO or invest in DAOs created by other community members.",
    color: "primary"
  }
] as const

export function HowItWorksSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={staggerContainer}
      id="how-it-works" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-[700] mb-4">How Does It <span className="text-primary font-[700]">Work</span>?</h2>
          <p className="text-xl text-text/60">
            Get started with WhiteRabbit in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={slideIn}
              custom={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="gradient-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-5xl font-[100] mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-[700] mb-2 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text/60">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 