import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Shield, Zap } from "lucide-react"

export function TrustSection() {
  return (
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
                  Fully compliant with Council Directive (EU) 2025/50 for secure and efficient tax reclaims across all
                  EU member states.
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
                  Trusted by major European financial institutions and designed to scale from individual investors to
                  large banks.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Legal Compliance:</strong> Helix Protocol operates in full compliance with the EU FASTER Directive
              (Council Directive (EU) 2025/50) and maintains the highest standards of data protection under GDPR.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Security:</strong> All transactions are secured through blockchain technology and end-to-end
              encryption, ensuring your financial data remains private and protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
