
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
          title="Digital Evidence from Workplace Projects."
          description="Each project shows the deliverable, my contribution, intended use, technical skills, evidence, challenges, actions and outcomes."
        />

        <div className="mt-16 space-y-20">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="motion-card motion-reveal border-2 border-black bg-white p-8 shadow-[10px_10px_0px_#111111] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[16px_16px_0px_#111111] md:p-12"
            >
              <div>
                <p className="type-eyebrow">
                  {project.label}
                </p>

                <h2 className="type-article-title mt-4">
                  {project.title}
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.category && <Tag>{project.category}</Tag>}
                  {project.role && <Tag>{project.role}</Tag>}
                  {project.period && <Tag>{project.period}</Tag>}
                </div>

                <p className="type-body-lg mt-6 max-w-5xl">
                  {project.overview}
                </p>

                {project.deliverable && (
                  <div className="mt-10 max-w-6xl">
                    <h3 className="type-subtitle">
                      Brief Description & Deliverable
                    </h3>

                    <p className="type-body mt-3">
                      {project.deliverable}
                    </p>
                  </div>
                )}

                <div className="mt-8 max-w-6xl">
                  <h3 className="type-subtitle">My Contribution</h3>

                  <p className="type-body mt-3">
                    {project.contribution}
                  </p>

                  {project.detailedContribution?.length > 0 && (
                    <ul className="type-body mt-5 list-disc space-y-3 pl-5">
                      {project.detailedContribution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {project.usage && (
                  <div className="mt-8 max-w-6xl">
                    <h3 className="type-subtitle">
                      How It Will Be Used
                    </h3>

                    <p className="type-body mt-3">
                      {project.usage}
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="type-subtitle">Technical Skills</h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>

                {project.evidence?.length > 0 && (
                  <div className="mt-8 max-w-6xl">
                    <h3 className="type-subtitle">Evidence Included</h3>

                    <ul className="type-body mt-5 list-disc space-y-3 pl-5">
                      {project.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-12 border-t-2 border-black pt-10">
                  <div className="grid gap-10 md:grid-cols-3">
                    <div>
                      <h3 className="type-subtitle">Knowledge</h3>

                      <p className="type-body mt-3">
                        {project.ksa?.knowledge}
                      </p>
                    </div>

                    <div>
                      <h3 className="type-subtitle">Skills</h3>

                      <p className="type-body mt-3">
                        {project.ksa?.skills}
                      </p>
                    </div>

                    <div>
                      <h3 className="type-subtitle">Attitudes</h3>

                      <p className="type-body mt-3">
                        {project.ksa?.attitudes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t-2 border-black pt-10">
                  <div className="grid gap-10 md:grid-cols-3">
                    <div>
                      <h3 className="type-subtitle">
                        Challenge
                      </h3>

                      <p className="type-body mt-3">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="type-subtitle">
                        Action
                      </h3>

                      <p className="type-body mt-3">
                        {project.resolution}
                      </p>
                    </div>

                    <div>
                      <h3 className="type-subtitle">
                        Result
                      </h3>

                      <p className="type-body mt-3">
                        {project.result ??
                          "The project became a clearer and more structured deliverable that could be reviewed, demonstrated and improved based on feedback."}
                      </p>
                    </div>
                  </div>
                </div>

                {project.images?.length > 0 && (
                  <div className="mt-12 border-t-2 border-black pt-10">
                    <div className="mb-8">
                      <p className="type-eyebrow">
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
                            <figcaption className="type-caption border-t-2 border-black px-6 py-5">
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
