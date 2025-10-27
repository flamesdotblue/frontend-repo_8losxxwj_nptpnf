import { Mail, Twitter, Youtube, Github } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-[#0b0b0c] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-gray-300">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-white text-2xl font-extrabold">Get in touch</h3>
            <p className="mt-3 max-w-md">
              Ready to collaborate or have a project in mind? Let’s build something players love.
            </p>
            <a
              href="mailto:simforgegames@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-500/90 px-5 py-3 font-semibold text-white shadow-[0_0_25px_#10b98155] ring-1 ring-emerald-400/50 transition hover:bg-emerald-400 hover:shadow-[0_0_40px_#10b98188]"
            >
              <Mail className="h-5 w-5" /> simforgegames@gmail.com
            </a>
          </div>
          <div className="md:justify-self-end">
            <h4 className="text-white font-bold">Follow us</h4>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/10 bg-white/5 hover:ring-emerald-400/50 hover:bg-emerald-500/20 transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-emerald-300" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/10 bg-white/5 hover:ring-emerald-400/50 hover:bg-emerald-500/20 transition"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-emerald-300" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/10 bg-white/5 hover:ring-emerald-400/50 hover:bg-emerald-500/20 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-emerald-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400">© 2025 Simforge Games</p>
          <nav className="mt-4 sm:mt-0 flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white">About Us</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#jobs" className="hover:text-white">Jobs</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
