'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ConnectWalletButton } from "@/components/connect-wallet-button"
import { Logo } from "@/components/logo"
import { 
  LayoutDashboard, 
  Sun,
  Moon,
  Vote
} from "lucide-react"

const sidebarLinks = [
  {
    title: "Home",
    href: "/app",
    icon: LayoutDashboard
  },
  {
    title: "Governance",
    href: "/app/governance",
    icon: Vote
  },
] as const

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Logo */}
      <div className="h-16 flex items-center px-6">
        <Logo className="text-2xl" />
      </div>
      <Separator />

      <ScrollArea className="flex-1 py-6">
        <nav className="grid gap-1 px-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.title}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <ConnectWalletButton />
      </div>
    </div>
  )
} 