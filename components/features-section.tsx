import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Zap } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-8 md:py-16 lg:py-20 bg-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Solving Double Taxation at the Root
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Every cross-border dividend payment results in double taxation. Helix eliminates this through
              privacy-first Web3 infrastructure that connects investors, intermediaries, and tax authorities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Relief at Source</CardTitle>
                  <CardDescription>Correct tax rate from day one</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Foreign CSDs automatically apply the correct reduced tax rate using zk-based proof of tax residency,
                eliminating overpayments before they happen.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">Quick Refunds</CardTitle>
                  <CardDescription>When relief at source isn't possible</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Fast, automated reclaims through our decentralized protocol when the necessary information wasn't
                available at the point of payment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
