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
  LineChart, 
  Users, 
  Settings,
  Sun,
  Moon,
  Vote
} from "lucide-react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/app",
    icon: LayoutDashboard
  },
  {
    title: "Trading",
    href: "/app/trading",
    icon: LineChart
  },
  {
    title: "Governance",
    href: "/app/governance",
    icon: Vote
  },
  {
    title: "Community",
    href: "/app/community",
    icon: Users
  },
  {
    title: "Settings",
    href: "/app/settings",
    icon: Settings
  }
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
        <Logo />
      </div>
      <Separator />

      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-2 px-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {link.title}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      
      <Separator />
      <div className="p-4">
        <ConnectWalletButton />
      </div>
    </div>
  )
} 