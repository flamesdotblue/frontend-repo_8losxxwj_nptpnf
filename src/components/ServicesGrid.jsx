import { Puzzle, Cog, Cpu, Gamepad } from 'lucide-react'

const services = [
  {
    title: 'Puzzle',
    desc: 'Elegant systems, clever mechanics, and satisfying challenges that delight players.',
    Icon: Puzzle,
  },
  {
    title: 'Idle',
    desc: 'Deep progression loops, economy balancing, and live-ops tuned for long-term retention.',
    Icon: Cog,
  },
  {
    title: 'IP & Co-Dev',
    desc: 'World-class production with partners to bring beloved IPs to interactive life.',
    Icon: Cpu,
  },
  {
    title: 'Hybrid',
    desc: 'Best of multiple genres blended into high-polish, high-performance mobile titles.',
    Icon: Gamepad,
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-[#0b0b0c] text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">What We Do</h2>
          <p className="mt-3 text-gray-300">
            From rapid prototyping to at-scale launches, we build premium games end-to-end.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-[0_0_20px_rgba(16,185,129,0.12)] transition hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:border-emerald-400/40"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/20 p-2 ring-1 ring-emerald-400/40">
                  <Icon className="h-6 w-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">{desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              <div className="mt-4 text-sm text-emerald-300/80 opacity-0 transition group-hover:opacity-100">
                Tap to learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
