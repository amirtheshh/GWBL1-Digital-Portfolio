function Card({ children, className = "", interactive = true }) {
  const interactiveClasses =
    "shadow-[8px_8px_0px_#111111] transition duration-300 hover:-translate-y-2 hover:shadow-[14px_14px_0px_#111111]"

  return (
    <article
      className={`border-2 border-black bg-white p-8 ${
        interactive ? interactiveClasses : ""
      } ${className}`}
    >
      {children}
    </article>
  )
}

export default Card
