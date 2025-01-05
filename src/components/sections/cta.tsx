'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export function CtaSection() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="gradient-border p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-[700] mb-4">Ready to Start?</h2>
          <p className="text-xl text-text/60 mb-8 max-w-2xl mx-auto">
            Join our community of creators and contributors today and experience the future of decentralized trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-accent hover:bg-accent/80 text-white rounded-full" 
              asChild
            >
              <Link href="/">Launch App</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-primary text-primary hover:bg-primary/40 hover:border-primary/80 rounded-full" 
              asChild
            >
              <Link 
                href="#how-it-works" 
                onClick={(e) => scrollToSection(e, 'how-it-works')}
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 