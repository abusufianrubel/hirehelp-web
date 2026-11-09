import { ChevronDown, MapPin, Search } from "lucide-react"

const LOCATIONS = [
  "Remote",
  "New York, USA",
  "London, UK",
  "Berlin, Germany",
  "Singapore",
] as const

/**
 * Glassmorphic job search bar: query input, location selector,
 * and a purple search button. Submits to the jobs page.
 */
function HeroSearch() {
  return (
    <form action="/jobs" role="search" className="w-full max-w-2xl">
      <div className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-950/50 backdrop-blur-xl md:flex-row md:items-center md:rounded-full md:pl-4">
        <div className="flex flex-1 items-center gap-2.5 rounded-full bg-white/5 px-4 py-3 md:bg-transparent md:py-2">
          <Search className="size-4 shrink-0 text-neutral-500" />
          <label htmlFor="hero-query" className="sr-only">
            Job title, skill or company
          </label>
          <input
            id="hero-query"
            name="q"
            type="text"
            autoComplete="off"
            placeholder="Job title, skill or company"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
          />
        </div>

        <div
          aria-hidden="true"
          className="hidden h-6 w-px bg-white/10 md:block"
        />

        <div className="relative flex flex-1 items-center gap-2.5 rounded-full bg-white/5 px-4 py-3 md:bg-transparent md:py-2">
          <MapPin className="size-4 shrink-0 text-neutral-500" />
          <label htmlFor="hero-location" className="sr-only">
            Location or Remote
          </label>
          <select
            id="hero-location"
            name="location"
            defaultValue=""
            className="w-full cursor-pointer appearance-none bg-transparent pr-5 text-sm text-neutral-200 outline-none"
          >
            <option
              value=""
              disabled
              className="bg-neutral-900 text-neutral-500"
            >
              Location or Remote
            </option>
            {LOCATIONS.map((location) => (
              <option key={location} className="bg-neutral-900">
                {location}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 size-4 text-neutral-500 md:right-2" />
        </div>

        <button
          type="submit"
          aria-label="Search jobs"
          className="flex h-12 w-full shrink-0 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-600/25 transition-colors duration-200 hover:bg-violet-500 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:outline-none active:bg-violet-600 md:size-12 md:w-auto"
        >
          <Search className="size-5" />
        </button>
      </div>
    </form>
  )
}

export { HeroSearch }
