import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading | WhiteRabbit",
  description: "Access advanced trading features, real-time market data, and execute trades on the WhiteRabbit platform.",
}

export default function TradingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 