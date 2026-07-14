
import Layout from "../components/Layout"
import Tag from "../components/Tag"
import SectionHeading from "../components/SectionHeading"
import { projects } from "../data/portfolioData"

function Projects() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:px-14 md:pt-24">
        <SectionHeading
          eyebrow="Projects"
          title="Digital evidence from workplace projects."
          description="Each case study shows the deliverable, my contribution, intended use, technical skills, evidence, challenges, actions and outcomes."
        />

        <div className="mt-16 space-y-20">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border-2 border-black bg-white p-8 shadow-[10px_10px_0px_#111111] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[16px_16px_0px_#111111] md:p-12"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">
                  {project.label}
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  {project.title}
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.category && <Tag>{project.category}</Tag>}
                  {project.role && <Tag>{project.role}</Tag>}
                  {project.period && <Tag>{project.period}</Tag>}
                </div>

                <p className="mt-6 max-w-5xl text-lg leading-relaxed text-[#444444]">
                  {project.overview}
                </p>

                {project.deliverable && (
                  <div className="mt-10 max-w-6xl">
                    <h3 className="text-xl font-black">
                      Brief Description & Deliverable
                    </h3>

                    <p className="mt-3 leading-relaxed text-[#444444]">
                      {project.deliverable}
                    </p>
                  </div>
                )}

                <div className="mt-8 max-w-6xl">
                  <h3 className="text-xl font-black">My Contribution</h3>

                  <p className="mt-3 leading-relaxed text-[#444444]">
                    {project.contribution}
                  </p>

                  {project.detailedContribution?.length > 0 && (
                    <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[#444444]">
                      {project.detailedContribution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {project.usage && (
                  <div className="mt-8 max-w-6xl">
                    <h3 className="text-xl font-black">
                      How It Will Be Used
                    </h3>

                    <p className="mt-3 leading-relaxed text-[#444444]">
                      {project.usage}
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-xl font-black">Technical Skills</h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>

                <div className="mt-12 border-t-2 border-black pt-10">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Knowledge, Skills and Attitudes
                  </p>

                  <div className="mt-8 grid gap-10 md:grid-cols-3">
                    <div>
                      <h3 className="text-xl font-black">Knowledge</h3>

                      <p className="mt-3 leading-relaxed text-[#444444]">
                        {project.ksa?.knowledge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-black">Skills</h3>

                      <p className="mt-3 leading-relaxed text-[#444444]">
                        {project.ksa?.skills}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-black">Attitudes</h3>

                      <p className="mt-3 leading-relaxed text-[#444444]">
                        {project.ksa?.attitudes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t-2 border-black pt-10">
                  <div className="grid gap-10 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest">
                        Challenge
                      </p>

                      <p className="mt-4 leading-relaxed text-[#555555]">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest">
                        Action
                      </p>

                      <p className="mt-4 leading-relaxed text-[#555555]">
                        {project.resolution}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest">
                        Result
                      </p>

                      <p className="mt-4 leading-relaxed text-[#555555]">
                        {project.result ??
                          "The project became a clearer and more structured deliverable that could be reviewed, demonstrated and improved based on feedback."}
                      </p>
                    </div>
                  </div>
                </div>

                {project.images?.length > 0 && (
                  <div className="mt-12 border-t-2 border-black pt-10">
                    <div className="mb-8">
                      <p className="text-sm font-bold uppercase tracking-widest">
                        Visual Evidence
                      </p>
                    </div>

                    <div className="space-y-10">
                      {project.images.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden border-2 border-black bg-white"
                        >
                          <div className="flex min-h-[320px] items-center justify-center p-4 md:min-h-[500px] md:p-8">
                            <img
                              src={image.src}
                              alt={image.alt}
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
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
