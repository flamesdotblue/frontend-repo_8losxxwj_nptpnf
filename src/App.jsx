import HeaderNav from './components/HeaderNav'
import HeroSection from './components/HeroSection'
import ServicesGrid from './components/ServicesGrid'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white font-sans">
      <HeaderNav />
      <main>
        <HeroSection />
        {/* About summary (anchor target only for now) */}
        <section id="about" className="bg-[#0b0b0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold">About Us</h2>
                <p className="mt-4 text-gray-300">
                  We are a high-velocity studio forging premium experiences across puzzle, idle, IP, and hybrid genres. Our teams blend sharp design, technical excellence, and production discipline to deliver standout titles that scale.
                </p>
                <p className="mt-3 text-gray-300">
                  We move fast, build smart, and launch games that perform at scale.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 ring-1 ring-white/10 shadow-[0_0_35px_rgba(16,185,129,0.25)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Clients placeholder section with clean logos look */}
        <section id="portfolio" className="bg-[#0b0b0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-extrabold">Our Clients</h2>
            <p className="mt-2 text-gray-300">Partners and collaborators we’ve worked with.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {['POLYPIXEL','ULTRA','NOVA','AETHER'].map((brand) => (
                <div
                  key={brand}
                  className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 tracking-widest"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid />

        {/* Simple anchors for Blog/Jobs to match nav */}
        <section id="blog" className="bg-[#0b0b0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold">Blog</h2>
            <p className="mt-2 text-gray-400">Articles and updates coming soon.</p>
          </div>
        </section>
        <section id="jobs" className="bg-[#0b0b0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold">Jobs</h2>
            <p className="mt-2 text-gray-400">We’re always meeting great talent. Open roles coming soon.</p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default App
