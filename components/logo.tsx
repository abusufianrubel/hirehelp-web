import Link from "next/link"
import { HandHelping } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * HireHelp brand mark. Links back to the homepage.
 * Reusable across the navbar, footer, and other surfaces.
 */
function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HireHelp — home"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-600/25 transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        <HandHelping className="size-4.5 text-white" strokeWidth={2.2} />
      </span>
      <span className="text-lg font-semibold tracking-tight text-white">
        Hire<span className="text-violet-400">Help</span>
      </span>
    </Link>
  )
}

export { Logo }
