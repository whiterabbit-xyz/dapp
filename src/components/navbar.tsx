'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from "framer-motion"
import { navVariants } from "@/lib/animations"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from 'lucide-react'
import { Logo } from './logo'

export function Navbar() {
  const { scrollToSection } = useSmoothScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header 
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={cn(
            "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border/40 z-50"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href.slice(1))}
                      className="text-text/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <ThemeToggle />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/app">
                    <Button variant="secondary" className="text-white hover:text-white">
                      Launch App
                    </Button>
                  </Link>
                </motion.div>
              </nav>

              {/* Mobile Menu */}
              <div className="flex items-center gap-2 md:hidden">
                <ThemeToggle />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="flex items-center justify-center w-10 h-10 p-0"
                      size="icon"
                    >
                      <Menu className="w-6 h-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent position="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="text-left text-primary">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            scrollToSection(e, link.href.slice(1));
                            setIsOpen(false);
                          }}
                          className="text-lg text-text/60 hover:text-primary transition-colors py-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                      <div className="pt-4">
                        <Link href="/app">
                          <Button variant="secondary" className="w-full text-white hover:text-white">
                            Launch App
                          </Button>
                        </Link>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
} 