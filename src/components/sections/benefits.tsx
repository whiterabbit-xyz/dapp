'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations"
import { TrendingUp, Users2, Sparkles, Check } from "lucide-react"

const benefits = [
  {
    title: "For Creators",
    color: "primary",
    icon: TrendingUp,
    items: [
      "Access to larger trading capital",
      "Performance-based rewards",
      "Automated profit sharing",
      "Community recognition",
    ]
  },
  {
    title: "For Contributors",
    color: "secondary",
    icon: Users2,
    items: [
      "Diversified investment options",
      "Transparent performance tracking",
      "Reduced risk through diversification",
      "Regular reward distributions",
    ]
  },
  {
    title: "For Everyone",
    color: "accent",
    icon: Sparkles,
    items: [
      "Secure and audited platform",
      "24/7 trading operations",
      "Community-driven governance",
      "Real-time analytics",
    ]
  }
] as const

// Define a mapping of colors to Tailwind class names
const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
}

export function BenefitsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={staggerContainer}
      id="benefits" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-[700] mb-4">Platform <span className="text-primary font-[700]">Benefits</span></h2>
          <p className="text-xl text-text/60">
            Discover the advantages of joining our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="gradient-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`mb-4 ${colorClasses[benefit.color]}`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-[700] mb-4 ${colorClasses[benefit.color]}`}>
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <Check className={`w-4 h-4`} />
                        <span className="text-text/60">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
} 