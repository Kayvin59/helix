import { Network } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
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
  )
}
