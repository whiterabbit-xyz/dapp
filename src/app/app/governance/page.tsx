import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance | WhiteRabbit",
  description: "Participate in WhiteRabbit's decentralized governance - vote on proposals, submit ideas, and shape the future of the platform.",
}

export default function GovernancePage() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-16 h-16 dark:invert">
          <Image
            src="/trading-dao-logo.svg"
            alt="Trading DAO Logo"
            width={64}
            height={64}
            className="rounded-full bg-background p-2"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Trading DAO</h1>
          <p className="text-muted-foreground">Native chain governance for Trading DAO.</p>
        </div>
        <Button variant="outline">Follow</Button>
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="proposals" className="mb-8">
        <TabsList>
          <TabsTrigger value="proposals">Proposals</TabsTrigger>
          <TabsTrigger value="liquidity">Current Liquidity</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Create Proposal Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Create a proposal</h2>
        <Button>
          <span className="mr-2">+</span>
          New proposal
        </Button>
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <Input 
            placeholder="Search proposals..." 
            className="max-w-md"
          />
        </div>

        {/* Proposal Cards */}
        <Card className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="w-[80px] justify-center">Voting</Badge>
              <span className="text-sm text-muted-foreground">#001</span>
              <h3 className="font-medium">Update Trading Parameters</h3>
            </div>
            <span className="text-sm text-muted-foreground">2 days left</span>
          </div>
        </Card>

        <Card className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="rejected" className="w-[80px] justify-center">Rejected</Badge>
              <span className="text-sm text-muted-foreground">#002</span>
              <h3 className="font-medium">Increase Max Trading Limit</h3>
            </div>
            <span className="text-sm text-muted-foreground">December 20</span>
          </div>
        </Card>

        <Card className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="success" className="w-[80px] justify-center">Passed</Badge>
              <span className="text-sm text-muted-foreground">#000</span>
              <h3 className="font-medium">Initial Liquidity Pool Setup</h3>
            </div>
            <span className="text-sm text-muted-foreground">December 17</span>
          </div>
        </Card>
      </div>
    </div>
  )
} 