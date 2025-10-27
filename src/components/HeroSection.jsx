import Spline from '@splinetool/react-spline'

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] bg-[#0b0b0c] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft vignette + gradient glow overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0c]/40 via-transparent to-[#0b0b0c]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12),_transparent_60%)]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <p className="inline-flex items-center text-emerald-400/90 text-xs font-semibold tracking-widest uppercase">
              Next-Gen Game Studio
            </p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
              We forge high-performance games with scale, polish, and soul.
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              Simforge Games builds premium idle, puzzle, hybrid, and IP-driven titles for global audiences. We move fast, build smart, and launch at scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-md bg-emerald-500/90 px-6 py-3 font-semibold text-white shadow-[0_0_25px_#10b98155] ring-1 ring-emerald-400/50 transition hover:bg-emerald-400 hover:shadow-[0_0_40px_#10b98188]"
              >
                Explore Our Worlds
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-md px-6 py-3 font-semibold text-emerald-300/90 ring-1 ring-emerald-400/40 hover:text-white hover:bg-white/5 transition"
              >
                What We Do
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Team Members', value: '100+' },
              { label: 'Players Reached', value: '1M+' },
              { label: 'Launched Titles', value: '12' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition"
              >
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
