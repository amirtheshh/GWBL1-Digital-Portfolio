import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Tag from "../components/Tag"
import SectionHeading from "../components/SectionHeading"
import {
  criticalCoreSkills,
  ongoingTechnicalExploration,
  projects,
  technicalCompetencies,
} from "../data/portfolioData"
import profileImage from "../assets/profile.jpeg"

function Home() {
  const buttonClass = "button-link"

  const badgeClass = "badge-pill"

  return (
    <Layout showFooter>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-14 md:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="type-eyebrow">
              Guided Work-Based Learning Digital Portfolio
            </p>

            <h1 className="type-page-title mt-8 max-w-3xl">
              Robotics Research Intern at A*STAR
            </h1>

            <p className="type-body-lg mt-8 max-w-2xl">
              I am Kumar Amirtheswaran, a Year 3 Applied Artificial
              Intelligence student at Temasek Polytechnic, currently doing my
              internship at A*STAR's Advanced Remanufacturing and Technology
              Centre.
            </p>

  
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className={buttonClass}>
                View Projects
              </a>

              <Link to="/journey" className={buttonClass}>
                View Internship Journey
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="hero-portrait relative h-[420px] w-[330px] rotate-[-3deg] border-2 border-black bg-white shadow-[18px_18px_0px_#111111] transition duration-300 hover:-translate-y-2 hover:shadow-[24px_24px_0px_#111111] md:h-[520px] md:w-[420px]">
              <div className="absolute inset-8 border-2 border-black">
                <div className="absolute left-8 right-8 top-8 h-[280px] overflow-hidden border-2 border-black bg-[#EFECE6]">
                  <img
                    src={profileImage}
                    alt="Kumar Amirtheswaran"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-10 left-8 right-8">
                  <p className="type-eyebrow">
                    Diploma in Applied Artificial Intelligence
                  </p>

                  <p className="type-field-label mt-3">
                    Temasek Polytechnic
                  </p>
                </div>
              </div>

              <div className={`motion-badge absolute -top-6 right-2 z-20 ${badgeClass}`}>
                A*STAR Research Intern
              </div>

              <div
                className={`motion-badge absolute -bottom-8 -left-4 md:-left-10 ${badgeClass}`}
              >
                AI / Robotics / Research
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship overview */}
      <section className="border-t-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeading
            eyebrow="Internship Overview"
            title="Robotics Research Internship"
            description="My work involves researching, developing, integrating and testing AI technologies for robotics applications, including perception systems, computer vision, containerised services and software integration. As this is a research-driven internship, my responsibilities evolve based on project goals, technical requirements and ongoing experimentation"
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Card>
              <p className="type-eyebrow">
                Company
              </p>

              <h3 className="type-card-title mt-4">A*STAR</h3>

              <p className="type-body mt-4">
                The Agency for Science, Technology and Research is Singapore's
                public-sector research organisation.
              </p>
            </Card>

            <Card>
              <p className="type-eyebrow">
                Research Institute
              </p>

              <h3 className="type-card-title mt-4">ARTC</h3>

              <p className="type-body mt-4">
                The Advanced Remanufacturing and Technology Centre develops
                technologies for advanced manufacturing and industrial
                applications.
              </p>
            </Card>

            <Card>
              <p className="type-eyebrow">
                Department
              </p>

              <h3 className="type-card-title mt-4">
                Autonomous Systems and Robotics (ASR)
              </h3>

              <p className="type-body mt-4">
                The Autonomous Systems and Robotics department develops robotic
                systems and automation technologies for industrial applications.
                Its work includes process robotisation, mobile robotics,
                robotic system integration and human-robot collaboration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Digital Evidence & Projects"
              title="Workplace deliverables and technical evidence."
              description="These projects show the tasks completed, my contribution, how each deliverable may be used and the technical competencies applied."
            />

            <Link to="/projects" className={buttonClass}>
              View Full Projects
            </Link>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.slug}>
                <p className="type-eyebrow">
                  {project.label}
                </p>

                <h3 className="type-card-title-lg mt-4">{project.title}</h3>

                <p className="type-body mt-6">
                  {project.overview}
                </p>

                <div className="mt-8">
                  <p className="type-field-label">My Contribution</p>

                  <p className="type-body mt-2">
                    {project.contribution}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>

              </Card>
            ))}
          </div>

          <Card className="mt-12">
            <h3 className="type-card-title-lg">
              Ongoing Technical Exploration
            </h3>

            <p className="type-body mt-4 max-w-5xl">
              {ongoingTechnicalExploration}
            </p>
          </Card>
        </div>
      </section>

      {/* Technical competencies */}
      <section className="border-t-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeading
            eyebrow="Technical Skills & Competencies"
            title="Skills applied to workplace tasks."
            description="The competencies below are mapped to relevant Technical Skills and Competencies from the Skills Framework for Infocomm Technology. The proficiency levels reflect the tasks I have demonstrated during my internship, while the improvement areas identify corrective actions for further development."          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {technicalCompetencies.map((competency) => (
              <Card key={competency.name}>
                <p className="type-eyebrow">
                  {competency.level}
                </p>

                <h3 className="type-card-title mt-4">
                  {competency.name}
                </h3>

                <p className="type-body mt-4">
                  {competency.task}
                </p>

                <p className="type-field-label mt-6">Improvement Area</p>

                <p className="type-body mt-2">
                  {competency.improvement}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Generic skills */}
      <section className="border-t-2 border-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeading
            eyebrow="Generic Skills & Critical Core Skills"
            title="Tasks, actions and workplace results."
            description="These examples show how broader workplace competencies were demonstrated through real internship tasks."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {criticalCoreSkills.map((skill) => (
              <Card key={skill.name}>
                <h3 className="type-card-title">{skill.name}</h3>

                <p className="type-field-label mt-5">Task</p>

                <p className="type-body mt-2">
                  {skill.task}
                </p>

                <p className="type-field-label mt-5">Actions Taken</p>

                <p className="type-body mt-2">
                  {skill.actions}
                </p>

                <p className="type-field-label mt-5">Result</p>

                <p className="type-body mt-2">
                  {skill.result}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
