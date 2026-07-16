import { Link } from "react-router-dom"
import Layout from "../components/Layout"

function NotFound() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-32 text-center md:px-14">
        <p className="type-eyebrow">404</p>
        <h1 className="type-page-title mt-8">Page not found.</h1>
        <Link to="/" className="button-link mt-10">Return Home</Link>
      </section>
    </Layout>
  )
}

export default NotFound
