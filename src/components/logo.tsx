'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "font-[900] text-2xl text-primary inline-flex items-center",
        className
      )}
    >
      WhiteRabbit
    </Link>
  )
} 