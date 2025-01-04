'use client'

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Toaster } from "sonner"
import { useTheme } from "next-themes"

function ToasterWithTheme() {
  const { theme } = useTheme()
  
  return (
    <Toaster
      theme={theme as "light" | "dark"}
      position="top-right"
      richColors
      toastOptions={{
        className: "border bg-background text-foreground",
        classNames: {
          success: "border-green-500/50",
          error: "border-red-500/50",
          warning: "border-yellow-500/50"
        }
      }}
    />
  )
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="relative z-1">
        {children}
        <ToasterWithTheme />
      </main>
    </ThemeProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
