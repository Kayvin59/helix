import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  currentPage?: "home" | "profile"
}

export function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/helix-logo.png" width={60} height={60} alt="Helix Protocol Logo" />
        <span className="ml-2 text-xl font-bold text-gray-900">Helix</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {currentPage === "home" ? (
          <>
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
          </>
        ) : (
          <>
            <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium text-blue-600" href="/profile">
              Profile
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
