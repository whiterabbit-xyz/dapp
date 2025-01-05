import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { BenefitsSection } from "@/components/sections/benefits"
import { FaqSection } from "@/components/sections/faq"
import { CtaSection } from "@/components/sections/cta"
import { FooterSection } from "@/components/sections/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://whiterabbit.tabellio.io"),
  title: "WhiteRabbit | Decentralized Trading Platform",
  description: "Experience the future of trading with WhiteRabbit - A decentralized trading platform combining DeFi, community governance, and advanced trading tools.",
  openGraph: {
    title: "WhiteRabbit | Decentralized Trading Platform",
    description: "Experience the future of trading with WhiteRabbit - A decentralized trading platform combining DeFi, community governance, and advanced trading tools.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "WhiteRabbit Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteRabbit | Decentralized Trading Platform",
    description: "Experience the future of trading with WhiteRabbit - A decentralized trading platform combining DeFi, community governance, and advanced trading tools.",
    images: ["/thumbnail.png"],
  },
} 

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </>
  )
}
