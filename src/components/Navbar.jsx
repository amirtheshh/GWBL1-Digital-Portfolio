
import { useState } from "react"
import { NavLink } from "react-router-dom"

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Journey", to: "/journey" },
  { label: "Reflection", to: "/reflection" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => {
    if (isActive) {
      return "font-black underline transition hover:underline"
    }

    return "font-semibold transition hover:underline"
  }

  return (
    <nav className="mx-auto max-w-7xl px-6 py-8 md:px-14">
      <div className="flex items-center justify-end">
        <div className="hidden items-center gap-10 text-sm md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded-full border-2 border-black bg-transparent px-5 py-2.5 text-sm font-bold transition hover:bg-black hover:text-white md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="mt-6 grid gap-4 border-2 border-black bg-[#F7F5F0] p-5 text-sm md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar

