import { CheckCircle, FileText, RefreshCw, Shield } from "lucide-react"

export function HowItWorksSection() {
  return (
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
                  Smart contracts automatically verify residency and ownership proofs, calculating correct tax rates in
                  real-time.
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
  )
}
