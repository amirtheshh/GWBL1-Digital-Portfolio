function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="motion-reveal max-w-4xl">
      <p className="type-eyebrow">{eyebrow}</p>
      <h2 className="type-section-title mt-7">{title}</h2>
      {description && <p className="type-body-lg mt-6">{description}</p>}
    </div>
  )
}
export default SectionHeading
