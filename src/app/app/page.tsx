import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Timer } from "lucide-react"
import { Metadata } from "next"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const metadata: Metadata = {
  title: "Home | WhiteRabbit",
  description: "View your trading portfolio, active trades, and performance metrics in the WhiteRabbit trading dashboard.",
}

export default function HomePage() {
  return (
    <div className="space-y-8 px-6">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Home</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Vaults</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">5,682</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">18,487</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Votes cast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">459,113</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unique voters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">36,142</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Active Proposals Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Active Proposals</h3>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Update Trading Parameters #{i}</h4>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline">Vault #{i}</Badge>
                          <Badge 
                            variant={i % 2 === 0 ? "destructive" : "success"}
                          >
                            {i % 2 === 0 ? "Not Voted" : "Voted"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Timer className="h-4 w-4" />
                        <span>2 days remaining</span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 absolute bg-card hover:bg-muted border-0 h-12 w-12 shadow-lg transition-colors" />
            <CarouselNext className="hidden md:flex -right-6 absolute bg-card hover:bg-muted border-0 h-12 w-12 shadow-lg transition-colors" />
          </Carousel>
        </div>
      </div>

      {/* My Vaults Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">My Vaults</h3>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Vault
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Vault #{i}</h4>
                    <Badge variant="secondary">Active Proposal</Badge>
                  </div>
                  <p className="text-2xl font-semibold">$123,456</p>
                  <p className="text-sm text-muted-foreground">Total Balance</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* My Contributions Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">My Contributions</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Vault #{i}</h4>
                    <Badge variant="secondary">Active Proposal</Badge>
                  </div>
                  <p className="text-2xl font-semibold">$45,678</p>
                  <p className="text-sm text-muted-foreground">Total Contribution</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 