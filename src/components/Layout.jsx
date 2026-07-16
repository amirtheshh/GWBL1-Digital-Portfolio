import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children, showFooter = false }) {
  return (
    <main className="min-h-screen bg-[#151515] p-2 text-[#111111] md:p-5">
      <section className="page-enter min-h-[calc(100vh-1rem)] overflow-hidden bg-[#F7F5F0] md:min-h-[calc(100vh-2.5rem)] md:rounded-sm">
        <Navbar />

        {children}

        {showFooter && <Footer />}
      </section>
    </main>
  )
}

export default Layout
