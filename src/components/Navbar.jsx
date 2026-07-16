
import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Internship Journey", to: "/journey" },
  { label: "Reflection", to: "/reflection" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) => {
    if (isActive) {
      return "nav-link nav-link-active"
    }

    return "nav-link"
  }

  const scrollToContact = () => {
    setOpen(false)

    const scroll = () => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    if (location.pathname !== "/") {
      navigate("/")
      window.setTimeout(scroll, 80)
      return
    }

    scroll()
  }

  const contactClass = "nav-link"

  return (
    <nav className="mx-auto max-w-7xl px-6 py-8 md:px-14">
      <div className="flex items-center justify-end">
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={scrollToContact}
            className={contactClass}
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          className="button-link button-link-sm md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="mt-6 grid gap-4 border-2 border-black bg-[#F7F5F0] p-5 md:hidden">
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
          <button
            type="button"
            onClick={scrollToContact}
            className={`${contactClass} text-left`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
