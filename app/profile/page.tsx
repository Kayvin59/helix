import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock, ExternalLink, Network, Shield, X } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  // Mock data - will be replaced with real data later
  const mockRequests = [
    {
      id: 1,
      dateTime: "2025-06-15 14:30 UTC",
      entity: "German Tax Authority",
      purpose: "TIN verification for tax reclaim",
      dataType: "TIN",
      status: "Pending",
    },
    {
      id: 2,
      dateTime: "2025-06-14 09:15 UTC",
      entity: "Company X",
      purpose: "Compliance with FASTER directive",
      dataType: "eTRC",
      status: "Approved",
    },
    {
      id: 3,
      dateTime: "2025-06-13 16:22 UTC",
      entity: "French Tax Authority",
      purpose: "Cross-border tax verification",
      dataType: "Income data",
      status: "Pending",
    },
    {
      id: 4,
      dateTime: "2025-06-12 11:45 UTC",
      entity: "Austrian Revenue Service",
      purpose: "Withholding tax reclaim",
      dataType: "eTRC",
      status: "Completed",
    },
  ]

  const mockAuthorizedEntities = [
    { name: "German Tax Authority", id: 1 },
    { name: "Company X", id: 2 },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "Approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approved
          </Badge>
        )
      case "Completed":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Completed
          </Badge>
        )
      case "Denied":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Denied
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Network className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Helix</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium text-blue-600" href="/profile">
            Profile
          </Link>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
              <p className="text-gray-600">Manage your account and data access permissions</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Wallet Address */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Wallet Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">0x123...abc</code>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* eTRC Status */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">eTRC Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Issued</span>
                </div>
              </CardContent>
            </Card>

            {/* Authorized Entities */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Authorized Entities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockAuthorizedEntities.map((entity) => (
                    <div key={entity.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{entity.name}</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-600 hover:text-red-700">
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <Separator className="my-8" />

        {/* Dashboard - Requests Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Data Access Requests</h2>
              <p className="text-gray-600">Review and manage requests for access to your data</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-gray-600">
                {mockRequests.filter((r) => r.status === "Pending").length} pending requests
              </span>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Date & Time</TableHead>
                    <TableHead className="font-semibold">Entity</TableHead>
                    <TableHead className="font-semibold">Purpose</TableHead>
                    <TableHead className="font-semibold">Data Type</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Action Required</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRequests.map((request) => (
                    <TableRow key={request.id} className="hover:bg-gray-50">
                      <TableCell className="font-mono text-sm">{request.dateTime}</TableCell>
                      <TableCell className="font-medium">{request.entity}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate" title={request.purpose}>
                          {request.purpose}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {request.dataType}
                        </Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>
                        {request.status === "Pending" ? (
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
                              Deny
                            </Button>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{mockRequests.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Pending Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {mockRequests.filter((r) => r.status === "Pending").length}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {mockRequests.filter((r) => r.status === "Completed" || r.status === "Approved").length}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
