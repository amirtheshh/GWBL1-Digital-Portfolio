import { useState } from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import SectionHeading from "../components/SectionHeading"

const sections = [
  {
    title: "Nature of Work",
    content: [
      "My role as a Robotics Research Intern involves a combination of technical research, software development, experimentation, system integration, testing and documentation. Unlike a classroom assignment with a fixed scope and expected answer, the direction of my work can change based on experimental results, technical limitations and feedback from my supervisor.",

      "So far, my responsibilities have included developing the AI & Robotics Services Catalogue, working with Docker and Streamlit, exploring AI perception technologies such as RF-DETR and FoundationPose, testing ROS 2 and Intel RealSense workflows, and supporting the development of an OCR-based meter reading component for a larger robotics project.",

      "The work requires me to switch between researching unfamiliar technologies, writing and modifying code, testing hardware and software components, documenting findings and presenting progress. This has helped me understand that research-oriented engineering work is not always linear, and progress can also come from identifying limitations, ruling out unsuitable approaches and improving the way experiments are conducted.",
    ],
  },
  {
    title: "Challenges Faced",
    content: [
      "One major challenge has been troubleshooting workflows that involve several connected components. Issues can originate from the camera, Docker configuration, ROS 2 communication, model dependencies or output formatting. At the beginning of the internship, I sometimes changed multiple settings at once, which made it difficult to identify the actual cause of a problem.",

      "I have gradually improved by separating the workflow into smaller checks. I now verify hardware detection first, followed by camera topics, container configuration, model execution and output data. This has made the debugging process more systematic and reduced unnecessary changes.",

      "Another challenge has been OCR accuracy. Meter readings are not always extracted correctly because image quality, display clarity and preprocessing can affect the result. Instead of depending on a single image version, I have tested raw, resized, denoised and sharpened versions before selecting the most suitable valid reading.",

      "A further challenge has been working with tools and frameworks that I had not used before, such as ROS 2, Docker Compose, FoundationPose, BlenderProc and PaddleOCR. I have relied on documentation, tutorials, small-scale experiments and supervisor feedback to build my understanding gradually.",
    ],
  },
  {
    title: "Learning & Growth",
    content: [
      "The internship has helped me become more independent and systematic when working with unfamiliar technologies. I have learned that reading documentation alone is not enough, and technical understanding often develops through repeated testing, observation and comparison of results.",

      "My debugging approach has improved significantly. Instead of immediately attempting large changes, I have become more comfortable isolating individual components, checking logs and outputs, and recording useful commands and findings. This has made it easier to understand what is happening and communicate issues clearly.",

      "I have also developed a stronger understanding of how artificial intelligence can be applied within robotics. Through work involving RF-DETR, FoundationPose, PaddleOCR, ROS 2 and Intel RealSense, I have gained exposure to object detection, segmentation, OCR, RGB-D data and 6D pose estimation.",

      "I applied knowledge of computer vision and robotics software, technical skills in Python, Docker, ROS 2 and OCR, and attitudes such as patience, adaptability and systematic problem solving when completing my assigned tasks.",

      "In addition to technical growth, I have improved my communication and self-management. Regular progress discussions require me to explain what I have tested, what limitations remain and what I plan to try next. This is helping me become more confident in presenting incomplete or experimental work honestly and clearly.",
    ],
  },
  {
    title: "Current Accomplishments",
    content: [
      "One of my main accomplishments so far has been contributing to the development of the AI & Robotics Services Catalogue. I have worked on the Streamlit interface, YAML-based service configuration, Docker Compose generation, live terminal output and service controls. This has given me practical experience in building a software tool that supports the organisation and launch of AI and robotics services.",

      "I have also developed the OCR-based meter reading workflow as part of a larger robotics project under my supervisor. My contribution has focused on detecting meter regions, preprocessing captured images, extracting readings using PaddleOCR and writing structured outputs into CSV and Excel files.",

      "Another accomplishment has been contributing to an ongoing visual perception pipeline that combines Intel RealSense, ROS 2, Isaac ROS, RF-DETR and FoundationPose. The pipeline is being developed to investigate how AI-based object detection, segmentation and 6D pose estimation can support robotic perception tasks. This work has strengthened my understanding of integrating AI models with robotics software and camera systems.",

      "The Services Catalogue produced a working interface that could generate Docker Compose configurations and display service output, while the OCR workflow successfully extracted meter readings from test images and exported the results into structured CSV and Excel files for review.",

      "Although some experiments remain under development, they have helped me build a stronger technical foundation and produce useful documentation, test results and working components for continued development.",
    ],
  },
  {
    title: "Critical Reflection",
    content: [
      "One aspect I am continuing to improve is the way I plan experiments. Some early testing was exploratory and was not always recorded in a consistent format. This made it harder to compare results across different configurations.",

      "A better approach is to define the objective, variables, expected output and evaluation method before starting each experiment. I am also working towards maintaining a clearer experiment log containing the configuration used, result observed and next action.",

      "I am also improving the way I evaluate technical performance. For example, while the OCR workflow has produced readings, a more rigorous evaluation would involve a larger image set, ground-truth values and clear accuracy metrics. Similarly, pose-estimation experiments would benefit from a more structured method for checking accuracy and stability.",

      "Feedback from my supervisor has also helped me identify which parts of the work required clearer documentation, further testing or a different technical approach, and I have used this feedback to refine my next steps.",

      "These improvements can make my work easier to reproduce, compare and explain, while also helping me make stronger technical decisions as the internship continues.",
    ],
  },
  {
    title: "Future Outlook",
    content: [
      "The internship has exposed me to different areas within artificial intelligence, computer vision, robotics and software engineering. Working on a variety of research and development tasks has given me a better understanding of how these domains can be applied to solve practical engineering problems.",

      "As the internship continues, I hope to deepen my understanding of robotics perception, AI model integration and software engineering practices. I aim to explore more advanced AI models and contribute to the development of more robotics applications.",

      "I also aim to improve my software engineering practices by writing cleaner and more modular code, strengthening validation and error handling, and adopting more structured testing and documentation methods.",

      "Overall, the experience has broadened my technical knowledge and introduced me to several areas that I find interesting. It is also helping me better understand the types of technologies and engineering work that I may wish to explore further in my future studies and career.",
    ],
  },
]

function Reflection() {
  const [selectedTitle, setSelectedTitle] = useState(sections[0].title)

  const selectedSection =
    sections.find((section) => section.title === selectedTitle) ?? sections[0]

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-14 md:px-14 md:pt-24">
        <SectionHeading
          eyebrow="Reflection & Future Outlook"
          title="Reflecting on my ongoing learning and growth."
          description="This reflection examines the nature of my current work, the challenges I have faced, the skills I am developing and how the internship is shaping my future direction."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <button
              key={section.title}
              type="button"
              onClick={() => setSelectedTitle(section.title)}
              className={`border-2 border-black p-6 text-left transition duration-300 ${
                selectedTitle === section.title
                  ? "bg-black text-white shadow-[8px_8px_0px_#777777]"
                  : "bg-white shadow-[8px_8px_0px_#111111] hover:-translate-y-2 hover:shadow-[14px_14px_0px_#111111]"
              }`}
            >
              <p className="text-sm font-bold uppercase tracking-widest">
                Section
              </p>

              <h2 className="mt-3 text-2xl font-black">
                {section.title}
              </h2>
            </button>
          ))}
        </div>

        <Card className="mt-12" interactive={false}>
          <p className="text-sm font-bold uppercase tracking-widest">
            Selected Reflection
          </p>

          <h2 className="mt-4 text-3xl font-black">
            {selectedSection.title}
          </h2>

          <div className="mt-6 space-y-5">
            {selectedSection.content.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-[#444444]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </section>
    </Layout>
  )
}

export default Reflection
