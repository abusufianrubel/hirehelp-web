"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"

import { buttonVariants, Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/pricing", label: "Pricing" },
] as const

const GET_STARTED_STYLES =
  "bg-violet-600 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-500 active:bg-violet-600"

function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

/**
 * Floating dark navbar: logo on the left, centered links,
 * auth actions on the right, and a hamburger menu on mobile.
 */
function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // Solidify the bar slightly once the page is scrolled.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu when any link inside the header is clicked
  // (covers the logo and panel links, including middle/ctrl clicks).
  const onHeaderClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open && (event.target as HTMLElement).closest("a")) {
      setOpen(false)
    }
  }

  // Lock body scroll and close the menu on Escape while it is open.
  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50" onClick={onHeaderClick}>
      {/* Click-away layer shown behind the bar while the mobile menu is open */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <div className="relative mx-auto max-w-6xl px-3">
        <nav
          aria-label="Main navigation"
          className={cn(
            "mt-3 flex h-14 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-neutral-950/70 pl-4 pr-2.5 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
            scrolled && "bg-neutral-950/90 shadow-2xl shadow-black/40"
          )}
        >
          <Logo />

          {/* Centered links (desktop) */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href)

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                      active
                        ? "bg-white/10 text-white"
                        : "text-neutral-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Auth actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hidden text-neutral-300 hover:bg-white/10 hover:text-white sm:inline-flex"
              )}
            >
              Sign In
            </Link>

            <Button
              render={<Link href="/signup" />}
              nativeButton={false}
              size="lg"
              className={cn("px-4", GET_STARTED_STYLES)}
            >
              Get Started
              <ArrowRight />
            </Button>

            <Button
              variant="ghost"
              size="icon-lg"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
              className="text-neutral-300 hover:bg-white/10 hover:text-white md:hidden"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-nav"
            className="mt-2 animate-in fade-in-0 slide-in-from-top-2 duration-200 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-neutral-950/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <ul className="grid gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isActivePath(pathname, link.href)

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-200",
                          active
                            ? "bg-white/10 text-white"
                            : "text-neutral-400 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="my-3 h-px bg-white/10" />

              <div className="grid gap-2">
                <Link
                  href="/signin"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10 hover:text-white"
                  )}
                >
                  Sign In
                </Link>

                <Button
                  render={<Link href="/signup" />}
                  nativeButton={false}
                  size="lg"
                  className={GET_STARTED_STYLES}
                >
                  Get Started
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export { Navbar }
