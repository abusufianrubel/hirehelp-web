import { Briefcase, Building, Star, Users } from "lucide-react"

const STATS = [
  {
    value: "50K",
    label: "Active Jobs",
    icon: Briefcase,
    float: "animate-float",
  },
  {
    value: "12K",
    label: "Companies",
    icon: Building,
    float: "animate-float-delayed",
  },
  { value: "2M", label: "Job Seekers", icon: Users, float: "animate-float" },
  {
    value: "97%",
    label: "Satisfaction Rate",
    icon: Star,
    float: "animate-float-delayed",
  },
] as const

/**
 * Floating glassmorphic job statistics cards.
 */
function HeroStats() {
  return (
    <div className="relative -mt-8 grid grid-cols-2 gap-3 sm:-mt-10 sm:gap-4 lg:-mt-12 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.float} rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/10 sm:p-5`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-300 sm:size-9">
            <stat.icon className="size-4" />
          </span>
          <p className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export { HeroStats }
