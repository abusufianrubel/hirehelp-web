import Image from "next/image"
import Link from "next/link"
import { Flame } from "lucide-react"

import { HeroSearch } from "@/components/hero-search"
import { HeroStats } from "@/components/hero-stats"

const TRENDING_TAGS = [
  "Product Designer",
  "AI Engineering",
  "DevOps Engineer",
] as const

/**
 * Starfield, ambient glows and other decorative backdrop layers.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <Image
        src="/starfield.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-violet-950/40 to-transparent" />
      <div className="absolute top-20 left-1/2 size-72 -translate-x-1/2 animate-glow rounded-full bg-indigo-600/20 blur-3xl" />
    </div>
  )
}

/**
 * Glowing planet with the supporting tagline centered on top.
 */
function HeroPlanet() {
  return (
    <div className="relative mt-16 lg:mt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative aspect-square w-72 sm:w-96 lg:w-150">
          {/* atmospheric glow */}
          <div className="absolute -inset-12 animate-glow rounded-full bg-violet-600/20 blur-3xl" />
          {/* gradient rim light */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-b from-violet-400 via-indigo-500 to-blue-700 opacity-70 blur-md" />
          {/* sphere */}
          <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-b from-indigo-950 via-neutral-950 to-black">
            <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-violet-500/25 via-indigo-500/10 to-transparent" />
            <div className="absolute top-1/3 left-8 size-20 rounded-full bg-indigo-300/10 blur-2xl" />
            <div className="absolute right-10 bottom-10 size-28 rounded-full bg-blue-300/10 blur-2xl" />
          </div>
        </div>
      </div>

      <div className="relative flex min-h-72 items-center justify-center px-4 sm:min-h-96 lg:min-h-150">
        <p className="max-w-md text-center text-2xl font-semibold text-neutral-200 sm:text-3xl lg:max-w-lg lg:text-4xl">
          Assisting over <span className="text-white">15,000 job seekers</span>{" "}
          find their dream positions.
        </p>
      </div>
    </div>
  )
}

/**
 * HireHelp hero: bold headline, job search, trending tags,
 * glowing planet backdrop and floating statistics cards.
 */
function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-black"
    >
      <HeroBackdrop />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:pt-20 lg:px-6 lg:pt-24 lg:pb-28">
        <div className="flex animate-rise flex-col items-center text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-4 backdrop-blur">
            <span className="flex size-6 items-center justify-center rounded-full bg-orange-500/15">
              <Flame className="size-3.5 text-orange-400" />
            </span>
            <span className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 font-mono text-xs font-semibold text-white">
              50,000+
            </span>
            <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
              New jobs this month
            </span>
          </div>

          {/* headline */}
          <h1
            id="hero-title"
            className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Find Your{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Dream Job
            </span>{" "}
            Today
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            HireHelp connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>

          {/* search */}
          <div className="mt-8 flex w-full justify-center">
            <HeroSearch />
          </div>

          {/* trending tags */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-neutral-500">Trending:</span>
            {TRENDING_TAGS.map((tag) => (
              <Link
                key={tag}
                href="/jobs"
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <HeroPlanet />
        <HeroStats />
      </div>
    </section>
  )
}

export { Hero }
