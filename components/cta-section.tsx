import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Ready to Transform Your Tax Process?
            </h2>
            <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
              Join the future of European tax infrastructure. Get started with Helix Protocol today.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10 hover:border-white/80">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
