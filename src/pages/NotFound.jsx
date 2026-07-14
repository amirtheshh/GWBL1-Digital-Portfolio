import { Link } from "react-router-dom"
import Layout from "../components/Layout"

function NotFound() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-32 text-center md:px-14">
        <p className="text-sm font-bold uppercase tracking-[0.25em]">404</p>
        <h1 className="mt-8 text-5xl font-black">Page not found.</h1>
        <Link to="/" className="mt-10 inline-block rounded-full border-2 border-black px-7 py-4 font-bold transition hover:bg-black hover:text-white">Return Home</Link>
      </section>
    </Layout>
  )
}

export default NotFound
