import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function HeaderNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Jobs', href: '#jobs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0c]/70 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_20px_#10b98155]" />
            <span className="text-white font-extrabold tracking-wide text-lg">
              Simforge <span className="text-emerald-400">Games</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 inline-flex items-center rounded-md bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_#10b98155] ring-1 ring-emerald-400/50 transition duration-200 hover:bg-emerald-400 hover:shadow-[0_0_30px_#10b98188]"
            >
              Contact Us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0c]/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-emerald-500/90 px-3 py-2 text-center font-semibold text-white shadow-[0_0_20px_#10b98155] hover:bg-emerald-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
