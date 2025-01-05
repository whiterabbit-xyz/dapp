'use client'

import Link from "next/link"
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'
import { Github } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: "Features", href: "#features", id: "features" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Benefits", href: "#benefits", id: "benefits" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Stellar Network", href: "https://stellar.org", id: null },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/orgs/whiterabbit-xyz/repositories", icon: Github },
  ]
} as const

export function FooterSection() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <footer className="border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand and Social */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              WhiteRabbit
            </Link>
            <p className="mt-4 text-text/60 max-w-sm text-[900]">
            Build your community and follow the whiterabbit.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text/60 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex md:justify-end">
            <div className="w-full max-w-xs">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      onClick={link.id ? (e) => scrollToSection(e, link.id) : undefined}
                      className="text-text/60 hover:text-accent transition-colors py-2 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-text/40">
          <p>© {new Date().getFullYear()} WhiteRabbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 