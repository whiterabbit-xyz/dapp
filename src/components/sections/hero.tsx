'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { HeroBackground } from "@/components/hero-background"

export function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative min-h-screen flex flex-col pt-20"
    >
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center">
        {/* Hero Content */}
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.div 
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight flex items-center justify-center"
            >
              <div className="flex items-center">
                <span className="slot-machine-wrapper">
                  <span className="slot-machine">
                    <div className="text-primary font-[900] animated-gradient-text">Earn</div>
                    <div className="text-primary font-[900] animated-gradient-text">Grow</div>
                  </span>
                </span>
                <span className="text-primary font-[900]">Together</span>
              </div>
            </motion.h1>
            <motion.h2 
              variants={fadeIn}
              className="text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed weight-500"
            >
              Join the decentralized platform where creators and contributors unite for mutual growth.
            </motion.h2>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-accent hover:bg-accent/80 text-white rounded-full" 
              asChild
            >
              <Link href="/app">Get Started as a Creator</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-6 border-primary text-primary hover:bg-primary/40 hover:border-primary/80 rounded-full" 
              asChild
            >
              <Link href="/app">Get Started as a Contributor</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 