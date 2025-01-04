import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | WhiteRabbit",
  description: "View your trading portfolio, active trades, and performance metrics in the WhiteRabbit trading dashboard.",
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-700">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-900">$10,234.50</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-700">Active Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-900">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">Profit/Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-900">+5.2%</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium">Trade #{i}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="text-green-600 font-medium">+$123.45</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 