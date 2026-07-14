function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em]">{eyebrow}</p>
      <h2 className="mt-7 text-4xl font-black leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-6 text-lg leading-relaxed text-[#444444]">{description}</p>}
    </div>
  )
}
export default SectionHeading
