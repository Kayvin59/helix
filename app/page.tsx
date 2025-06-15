import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, FileText, Network, RefreshCw, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <span>
              <Image
              src="/helix-logo.png"
              width={60}
              height={60}
              alt="Picture of the author"
              />
          </span>
          <span className="ml-2 text-xl font-bold text-gray-900">Helix</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#trust">
            Trust
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/profile">
            Profile
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-gray-900">
                    Stop Paying Taxes <span className="text-blue-600">Twice</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                    The first privacy-first, zk-native protocol solving cross-border dividend taxation at the root.
                    Bridging TradFi and governments while onboarding millions to DeFi infrastructure.
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

        {/* Features Section */}
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

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">How Helix Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Privacy-first Web3 infrastructure solving the technical challenges that Web2 cannot address
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:gap-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                        1
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Request eTRC</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Get your zero-knowledge electronic Tax Residency Certificate (eTRC) that proves your tax status
                      without revealing personal data.
                    </p>
                  </div>
                  <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-blue-100">
                    <FileText className="h-16 w-16 text-blue-600" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 md:justify-end">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                        2
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Submit Claim</h3>
                    </div>
                    <p className="text-gray-600 text-lg md:text-right">
                      Financial intermediaries report beneficial ownership through our privacy-preserving protocol to
                      reconstruct shareholder registers.
                    </p>
                  </div>
                  <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-green-100">
                    <Shield className="h-16 w-16 text-green-600" />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                        3
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Automated Verification</h3>
                    </div>
                    <p className="text-gray-600 text-lg">
                      Smart contracts automatically verify residency and ownership proofs, calculating correct tax rates
                      in real-time.
                    </p>
                  </div>
                  <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-purple-100">
                    <RefreshCw className="h-16 w-16 text-purple-600" />
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4 md:justify-end">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
                        4
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Receive Refund</h3>
                    </div>
                    <p className="text-gray-600 text-lg md:text-right">
                      Receive relief at source or fast refunds through our decentralized network, eliminating double
                      taxation.
                    </p>
                  </div>
                  <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Compliance Section */}
        <section id="trust" className="w-full py-8 md:py-16 lg:py-20 bg-white border-t">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Trusted & Compliant
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Built for Trust</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Helix Protocol is fully compliant with EU regulations and built on open-source principles for maximum
                  transparency and security.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3 max-w-4xl">
                <Card className="border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <Shield className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                    <CardTitle className="text-lg">EU FASTER Compliant</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">
                      Fully compliant with Council Directive (EU) 2025/50 for secure and efficient tax reclaims across
                      all EU member states.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <Network className="h-12 w-12 mx-auto text-green-600 mb-2" />
                    <CardTitle className="text-lg">Open Source Protocol</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">
                      Built on open-source principles for maximum transparency. Auditable, verifiable, and accessible to
                      everyone.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <Zap className="h-12 w-12 mx-auto text-purple-600 mb-2" />
                    <CardTitle className="text-lg">Enterprise Ready</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600">
                      Trusted by major European financial institutions and designed to scale from individual investors
                      to large banks.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 max-w-4xl">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Legal Compliance:</strong> Helix Protocol operates in full compliance with the EU FASTER
                  Directive (Council Directive (EU) 2025/50) and maintains the highest standards of data protection
                  under GDPR.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Security:</strong> All transactions are secured through blockchain technology and end-to-end
                  encryption, ensuring your financial data remains private and protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-white/10 hover:border-white/80"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5 text-blue-600" />
          <p className="text-xs text-gray-600">© 2025 Divizend. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="/legal">
            Legal
          </Link>
        </nav>
      </footer>
    </div>
  )
}
