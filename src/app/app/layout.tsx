'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Trigger */}
      <div className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-border/10 bg-background px-4 lg:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] p-0 bg-background">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <div className="flex-1">
          <Logo className="text-xl" />
        </div>
      </div>

      <div className="container mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="fixed z-40 hidden h-screen w-64 bg-background lg:block border-r">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-4rem)] flex-1 lg:pl-64">
          <div className="max-w-[1200px] mx-auto py-6 px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 