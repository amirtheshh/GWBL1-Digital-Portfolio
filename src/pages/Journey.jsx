import { useState } from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import SectionHeading from "../components/SectionHeading"
import { weeks } from "../data/portfolioData"

const isIncompleteEntryText = (value) =>
  typeof value === "string" &&
  /\[?add (confirmed task|weekly focus|one clear learning point|screenshot|code snippet|diagram|commit|result)/i.test(
    value
  )

const getDisplayWeeks = () =>
  weeks
    .filter((week) => !isIncompleteEntryText(week.focus))
    .map((week) => ({
      ...week,
      tasks: week.tasks.filter((task) => !isIncompleteEntryText(task)),
      learning: isIncompleteEntryText(week.learning) ? "" : week.learning,
    }))

function WeekDetail({ item }) {
  return (
    <Card className="mt-12" interactive={false}>
      <p className="text-sm font-bold uppercase tracking-widest">
        Selected Week
      </p>

      <h2 className="mt-4 text-3xl font-black">{item.week}</h2>

      <p className="mt-3 text-sm font-bold uppercase tracking-widest text-[#555555]">
        {item.dates}
      </p>

      <h3 className="mt-5 text-2xl font-black">{item.focus}</h3>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest">
            Tasks Completed
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[#444444]">
            {item.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest">
            Learning Point
          </p>

          <p className="mt-5 leading-relaxed text-[#444444]">
            {item.learning}
          </p>
        </div>
      </div>

      {(item.images?.length > 0 || item.videos?.length > 0) && (
        <div className="mt-12 border-t-2 border-black pt-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest">
              Visual Evidence
            </p>
          </div>

          <div className="space-y-10">
            {item.images?.map((image) => (
              <figure
                key={`${item.week}-${image.src}`}
                className="overflow-hidden border-2 border-black bg-white"
              >
                <div className="flex min-h-[320px] items-center justify-center p-4 md:min-h-[500px] md:p-8">
                  <img
                    src={image.src}
                    alt={image.alt ?? `${item.week} visual evidence`}
                    className="max-h-[750px] w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {image.caption && (
                  <figcaption className="border-t-2 border-black px-6 py-5 text-sm leading-relaxed text-[#555555]">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}

            {item.videos?.map((video) => (
              <figure
                key={`${item.week}-${video.src}`}
                className="overflow-hidden border-2 border-black bg-white"
              >
                <div className="p-4 md:p-8">
                  <video
                    src={video.src}
                    title={video.title ?? `${item.week} visual evidence video`}
                    className="w-full"
                    controls
                    preload="metadata"
                  />
                </div>

                {video.title && (
                  <figcaption className="border-t-2 border-black px-6 py-5 text-sm leading-relaxed text-[#555555]">
                    {video.title}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

function Journey() {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0)
  const displayWeeks = getDisplayWeeks()
  const selectedWeek = displayWeeks[selectedWeekIndex] ?? displayWeeks[0]

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-14 md:pt-24">
        <SectionHeading
          eyebrow="Internship Journey"
          title="Week 1 to Week 11"
          description="This timeline captures the key tasks, challenges and learning moments that shaped my internship journey each week."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayWeeks.map((item, index) => (
            <button
              key={item.week}
              type="button"
              onClick={() => setSelectedWeekIndex(index)}
              className={`border-2 border-black p-6 text-left transition duration-300 ${
                selectedWeekIndex === index
                  ? "bg-black text-white shadow-[8px_8px_0px_#777777]"
                  : "bg-white shadow-[8px_8px_0px_#111111] hover:-translate-y-2 hover:shadow-[14px_14px_0px_#111111]"
              }`}
            >
              <p
                className={`text-sm font-bold uppercase tracking-widest ${
                  selectedWeekIndex === index ? "text-white" : "text-[#555555]"
                }`}
              >
                {item.week} - {item.dates}
              </p>

              <h2 className="mt-3 text-2xl font-black">{item.focus}</h2>
            </button>
          ))}
        </div>

        <WeekDetail item={selectedWeek} />
      </section>
    </Layout>
  )
}

export default Journey
