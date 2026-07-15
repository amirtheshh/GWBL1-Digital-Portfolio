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
  const buttonClass =
    "inline-flex items-center justify-center rounded-full border-2 border-black bg-transparent px-7 py-4 font-bold transition hover:bg-black hover:text-white"

  const badgeClass =
    "rounded-full border-2 border-black bg-[#F7F5F0] px-6 py-3 text-sm font-bold"

  return (
    <Layout showFooter>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-14 md:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em]">
              Guided Work-Based Learning Digital Portfolio
            </p>

            <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Robotics Research Intern at A*STAR
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#444444] md:text-xl">
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
            <div className="relative h-[420px] w-[330px] rotate-[-3deg] border-2 border-black bg-white shadow-[18px_18px_0px_#111111] transition duration-300 hover:-translate-y-2 hover:shadow-[24px_24px_0px_#111111] md:h-[520px] md:w-[420px]">
              <div className="absolute inset-8 border-2 border-black">
                <div className="absolute left-8 right-8 top-8 h-[280px] overflow-hidden border-2 border-black bg-[#EFECE6]">
                  <img
                    src={profileImage}
                    alt="Kumar Amirtheswaran"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-10 left-8 right-8">
                  <p className="text-sm font-bold uppercase tracking-widest">
                    Diploma in Applied Artificial Intelligence
                  </p>

                  <p className="mt-3 text-lg font-black">
                    Temasek Polytechnic
                  </p>
                </div>
              </div>

              <div className={`absolute -top-6 right-2 z-20 ${badgeClass}`}>
                A*STAR Research Intern
              </div>

              <div
                className={`absolute -bottom-8 -left-4 md:-left-10 ${badgeClass}`}
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
              <p className="text-sm font-bold uppercase tracking-widest">
                Company
              </p>

              <h3 className="mt-4 text-2xl font-black">A*STAR</h3>

              <p className="mt-4 leading-relaxed text-[#444444]">
                The Agency for Science, Technology and Research is Singapore's
                public-sector research organisation.
              </p>
            </Card>

            <Card>
              <p className="text-sm font-bold uppercase tracking-widest">
                Research Institute
              </p>

              <h3 className="mt-4 text-2xl font-black">ARTC</h3>

              <p className="mt-4 leading-relaxed text-[#444444]">
                The Advanced Remanufacturing and Technology Centre develops
                technologies for advanced manufacturing and industrial
                applications.
              </p>
            </Card>

            <Card>
              <p className="text-sm font-bold uppercase tracking-widest">
                Department
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Autonomous Systems and Robotics (ASR)
              </h3>

              <p className="mt-4 leading-relaxed text-[#444444]">
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
                <p className="text-sm font-bold uppercase tracking-widest">
                  {project.label}
                </p>

                <h3 className="mt-4 text-3xl font-black">{project.title}</h3>

                <p className="mt-6 leading-relaxed text-[#444444]">
                  {project.overview}
                </p>

                <div className="mt-8">
                  <p className="font-black">My Contribution</p>

                  <p className="mt-2 leading-relaxed text-[#444444]">
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
            <h3 className="text-3xl font-black">
              Ongoing Technical Exploration
            </h3>

            <p className="mt-4 max-w-5xl leading-relaxed text-[#444444]">
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
            description="The competencies below represent the technical skills developed and applied in my internship"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technicalCompetencies.map((competency) => (
              <Card key={competency.name}>
                <p className="text-sm font-bold uppercase tracking-widest">
                  {competency.level}
                </p>

                <h3 className="mt-4 text-2xl font-black">
                  {competency.name}
                </h3>

                <p className="mt-4 leading-relaxed text-[#444444]">
                  {competency.task}
                </p>

                <p className="mt-6 font-black">Improvement Area</p>

                <p className="mt-2 text-[#444444]">
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
                <h3 className="text-2xl font-black">{skill.name}</h3>

                <p className="mt-5 font-black">Task</p>

                <p className="mt-2 leading-relaxed text-[#444444]">
                  {skill.task}
                </p>

                <p className="mt-5 font-black">Actions Taken</p>

                <p className="mt-2 leading-relaxed text-[#444444]">
                  {skill.actions}
                </p>

                <p className="mt-5 font-black">Result</p>

                <p className="mt-2 leading-relaxed text-[#444444]">
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
