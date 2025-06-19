import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-gray-900">
                Stop Paying Taxes <span className="text-blue-600">Twice</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                The first privacy-first, zk-native protocol solving cross-border dividend taxation at the root. Bridging
                TradFi and governments while onboarding millions to DeFi infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-square overflow-hidden rounded-xl">
            <div className="relative h-full w-full">
              <Image
                src="/helix-hero.png"
                width={500}
                height={500}
                alt="Helix Protocol Network Visualization"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
