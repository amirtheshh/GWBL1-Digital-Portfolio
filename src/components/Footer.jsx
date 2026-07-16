import { useEffect, useRef, useState } from "react"

function Footer() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const footer = footerRef.current

    if (!footer) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      id="contact"
      ref={footerRef}
      className={`border-t-2 border-black transition-all duration-1000 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 [clip-path:inset(0_0_0_0)]"
          : "translate-y-10 opacity-0 [clip-path:inset(18%_0_0_0)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              Contact
            </p>
            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Get in touch.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#444444]">
              If you would like to learn more about my internship, projects or
              experience, feel free to get in touch using the contact details
              below.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="mailto:amirtheswaran07@gmail.com"
              className="rounded-full border-2 border-black px-7 py-3 font-bold transition hover:bg-black hover:text-white"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/amirtheswaran-kumar-992313305"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-black px-7 py-3 font-bold transition hover:bg-black hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t-2 border-black pt-8 text-sm text-[#555555] md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Kumar Amirtheswaran</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
