'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations"
import { 
  ArrowLeftRight, 
  Lock, 
  Award, 
  Vote, 
  LineChart 
} from "lucide-react"

const features = [
  {
    title: "Create Your Own Trading DAO",
    description: "Start your own Trading DAO and manage pooled funds on connected decentralized exchanges.",
    icon: ArrowLeftRight,
    color: "primary"
  },
   {
    title: "Decentralized Trading",
    description: "Trade with confidence on a fully decentralized platform powered by smart contracts.",
    icon: ArrowLeftRight,
    color: "primary"
  },
  {
    title: "Secure and Transparent",
    description: "Trade and invest with confidence using audited smart contracts and secure wallets.",
    icon: Lock,
    color: "accent"
  },
  {
    title: "Fair Profit Sharing",
    description: "Enjoy transparent reward distribution based on performance and contributions.",
    icon: Award,
    color: "primary"
  },
  {
    title: "Collaborative Governance",
    description: "Participate in platform decisions through our DAO governance system.",
    icon: Vote,
    color: "secondary"
  },
  {
    title: "Real-time Analytics",
    description: "Access detailed analytics and performance metrics in real-time.",
    icon: LineChart,
    color: "accent"
  }
] as const

export function FeaturesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={staggerContainer}
      id="features" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-[700] mb-4">Why Choose <span className="text-primary font-[700]">WhiteRabbit</span>?</h2>
          <p className="text-xl text-text/60">
            Everything you need to succeed in decentralized trading
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card 
                className="gradient-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className={`mb-4 text-${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-[700] mb-2 text-${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-text/60">
                    {feature.description}
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
