
import catalogueImageOne from "../assets/ai-robotics-services-catalogue1.jpeg"
import catalogueImageTwo from "../assets/ai-robotics-services-catalogue2.jpeg"
import ocrImageOne from "../assets/ocr1.png"
import ocrImageTwo from "../assets/ocr2.png"
import ocrImageThree from "../assets/ocr3.png"
import weekThreeImage from "../assets/week3.jpeg"
import weekSixImageTwo from "../assets/week6-sam3-segmentation.jpeg"
import weekSixVideo from "../assets/week6.mp4"
import weekEightVideo from "../assets/week8.mp4"
import weekTenImage from "../assets/week10.jpeg"
import weekTenSyntheticBinDatasetImage from "../assets/week10(1).jpeg"
import weekTenFlowchartImage from "../assets/week10-ocr-flowchart.png"
import weekTwoImage from "../assets/week2.jpeg"

export const ongoingTechnicalExploration =
  "I am also currently contributing to an ongoing robotics visual perception pipeline involving Intel RealSense, ROS 2, Isaac ROS and AI models such as RF-DETR and FoundationPose. This work explores how AI-based object detection, segmentation and 6D pose estimation can support robotic perception tasks. The pipeline is still under active development and experimentation."
export const projects = [
  {
    slug: "ai-services-catalogue",
    label: "Project 01",
    title: "AI & Robotics Services Catalogue",
    category: "Software Tool Development",
    period: "April - June 2026",
    tech: "Python, Streamlit, Docker, Docker Compose, YAML, GitLab",
    overview:
      "A web application for browsing, configuring and launching modular AI and robotics services using Docker Compose.",
    deliverable:
      "I worked on an AI & Robotics Services Catalogue. The tool allows service information to be loaded from configuration files and supports Docker Compose generation so that launching services is more reproducible.",
    contribution:
      "Developed the Streamlit interface, YAML-based service configuration, Docker Compose generation, live terminal output and service controls.",
    detailedContribution: [
      "Developed the Streamlit user interface for browsing and selecting services.",
      "Created YAML-based service configuration so service details could be managed more cleanly.",
      "Worked on Docker Compose generation logic for launching selected services.",
      "Added live terminal output and service controls to make the tool more usable.",
      "Tested service launch behaviour and updated the catalogue based on feedback.",
    ],
    usage:
      "The catalogue can support users by making service setup more organised and reproducible. Instead of manually searching for commands or configuration details, users can view available services and generate Docker Compose files from the interface.",
    challenge:
      "One challenge was handling different service configurations because each AI or robotics service may require different setup, dependencies and launch commands. This made it difficult to debug issues when services failed to launch correctly or had unexpected behaviour.",
    resolution:
      "I addressed this by using a more modular configuration approach, testing services step-by-step and adding live terminal output to help identify where issues occurred during service launch.",
    ksa: {
      knowledge:
        "Docker concepts, service configuration, software integration and robotics and AI service workflows.",
      skills:
        "Python development, Streamlit interface building, YAML configuration, Docker Compose setup and debugging.",
      attitudes:
        "Systematic debugging, patience, self-directed learning and attention to detail.",
    },
    skills: [
      "Python",
      "Streamlit",
      "Docker",
      "Docker Compose",
      "YAML",
      "GitLab",
    ],
    images: [
      {
        src: catalogueImageOne,
        alt: "AI and robotics services catalogue interface screenshot",
      },
      {
        src: catalogueImageTwo,
        alt: "AI and robotics services catalogue service details screenshot",
      },
    ],
  },
  {
    slug: "ocr-meter-reading-workflow",
    label: "Project 02",
    title: "OCR-Based Digital Meter Reading Workflow",
    category: "Computer Vision and OCR Workflow",
    period: "July 2026",
    tech: "Python, OpenCV, PaddleOCR, YAML, CSV, Excel",
    overview:
      "A computer-vision and OCR workflow that detects two meter displays from captured images, extracts readings using PaddleOCR and saves the final results into Excel.",
    deliverable:
      "I worked on an OCR-based workflow as part of a bigger project. The workflow detects Meter A and Meter B from an image, crops the relevant display areas, applies preprocessing, extracts possible readings using PaddleOCR and saves the final selected readings into CSV or Excel format.",
    contribution:
      "Designed and documented the workflow, tested meter detection using OpenCV, applied image preprocessing, used PaddleOCR to extract readings and generated structured CSV/Excel outputs for review.",
    detailedContribution: [
      "Tested meter detection using OpenCV and Hough Circle Transform.",
      "Created crop regions for Meter A and Meter B based on detected circle positions.",
      "Applied preprocessing such as resizing, denoising and sharpening to improve OCR readability.",
      "Used PaddleOCR to extract possible meter readings from each crop.",
      "Cleaned and selected valid readings before writing the results to CSV and Excel.",
      "Documented the full workflow using slides so the process could be explained clearly.",
    ],
    usage:
      "The OCR workflow was developed as a supporting component of a larger robotics project. My work focused on designing the computer vision and OCR pipeline to process captured images, extract digital meter readings and produce structured outputs for validation and integration with the overall system.",
    challenge:
      "One challenge was that OCR accuracy depended heavily on image quality, display clarity and preprocessing. A single image version was not always reliable enough for consistent reading extraction.",
    resolution:
      "I tested multiple preprocessing versions such as raw, resized, denoised and sharpened crops, then selected the most suitable valid reading from the OCR candidates.",
    ksa: {
      knowledge:
        "OCR workflow design, image preprocessing, computer vision localisation and output validation.",
      skills:
        "Python scripting, OpenCV testing, PaddleOCR usage, reading parsing, Excel output generation and technical documentation.",
      attitudes:
        "Accuracy, persistence, practical problem solving and willingness to test multiple approaches.",
    },
    skills: [
      "Python",
      "OpenCV",
      "PaddleOCR",
      "Image Preprocessing",
      "OCR",
      "Excel Output",
      "YAML",
    ],
    evidence: [
      "OCR workflow slide deck",
      "Meter detection and crop examples",
      "Preprocessing outputs",
      "OCR extraction logs",
      "Excel output screenshot",
      "Code structure screenshot",
    ],
    images: [
      {
        src: ocrImageOne,
        alt: "OCR workflow meter detection screenshot",
      },
      {
        src: ocrImageTwo,
        alt: "OCR preprocessing and extraction output screenshot",
      },
      {
        src: ocrImageThree,
        alt: "OCR meter reading results screenshot",
      },
    ],
  },
]

export const technicalCompetencies = [
  {
    name: "Python and Application Development",
    level: "Applied in Workplace",
    task:
      "Applied Python while developing the AI & Robotics Services Catalogue and the OCR-Based Digital Meter Reading Workflow. I used it to organise service configurations, process images, parse OCR readings and generate structured CSV and Excel outputs.",
    improvement:
      "Further improve how I structure larger Python applications and strengthen validation, automated testing and error handling.",
  },
  {
    name: "Docker and Containerisation",
    level: "Applied in Workplace",
    task:
      "Used Docker and Docker Compose to package and run AI and robotics services while configuring dependencies, devices, networking, volumes and runtime settings.",
    improvement:
      "Develop a deeper understanding of image optimisation, dependency management and deploying containers consistently across workstation and edge-computing environments.",
  },
  {
    name: "Computer Vision and OCR",
    level: "Applied in Workplace",
    task:
      "Applied OpenCV and PaddleOCR in the digital meter-reading workflow. I used computer-vision techniques to locate and crop meter displays, created several preprocessed image versions and extracted possible readings using OCR.",
    improvement:
      "Improve the validation and evaluation of OCR results by testing a larger range of real images and using clearer accuracy measurements.",
  },
  {
    name: "ROS 2 and Robotics Software Integration",
    level: "Developing Foundation",
    task:
      "Worked with ROS 2 nodes, topics, publishers, subscribers, image messages and live camera streams while testing RealSense, NanoOWL, SAM3, RF-DETR and FoundationPose workflows.",
    improvement:
      "Deepen my understanding of launch files, TF, coordinate frames, Quality of Service settings and the organisation of larger ROS 2 systems.",
  },
  {
    name: "Technical Research and Documentation",
    level: "Applied in Workplace",
    task:
      "Reviewed technical documentation, compared different approaches, recorded experimental findings and prepared workflow explanations for progress discussions with my supervisor.",
    improvement:
      "Use more structured experiment plans, clearer evaluation criteria and more consistent documentation of assumptions, limitations and results.",
  },
]

export const criticalCoreSkills = [
  {
    name: "Problem Solving",
    task:
      "Troubleshooting Docker services, camera workflows, OCR extraction and robotics software-integration issues.",
    actions:
      "Separated each problem into smaller checks, reviewed logs and outputs, tested components individually and compared results before reconnecting the complete workflow.",
    result:
      "Developed a more systematic debugging approach and became better at identifying the source of an issue without changing several components at the same time.",
  },
  {
    name: "Adaptability",
    task:
      "Working with unfamiliar technologies and changing technical requirements in a research-driven internship environment.",
    actions:
      "Reviewed documentation, tested alternative approaches, adjusted configurations and learned new tools such as Docker Compose, OpenCV, PaddleOCR, ROS 2, Isaac ROS, NanoOWL, SAM3, RF-DETR and FoundationPose.",
    result:
      "Became more comfortable learning unfamiliar technologies independently and adapting my approach according to experimental findings and project requirements.",
  },
  {
    name: "Self-Management",
    task:
      "Managing research and development tasks that were less structured than normal school assignments.",
    actions:
      "Divided larger problems into smaller experiments, maintained technical notes, organised useful commands and findings and planned the next step after each test.",
    result:
      "Improved my ability to manage uncertain tasks, organise my own work and continue making progress even when the final solution was not immediately clear.",
  },
  {
    name: "Communication",
    task:
      "Updating my supervisor on project progress, technical challenges, limitations and possible next steps.",
    actions:
      "Explained test results, demonstrated workflow outputs, documented current issues and discussed alternative approaches during progress reviews.",
    result:
      "Used feedback to refine project priorities, improve the deliverables and communicate technical work more clearly to others.",
  },
  {
    name: "Digital Fluency",
    task:
      "Using a range of digital tools and platforms to develop, test, document and present technical work.",
    actions:
      "Used Python development environments, Linux terminals, GitLab, Docker, Streamlit, Google Colab, OpenCV, PaddleOCR, ROS 2 and Excel across different project activities.",
    result:
      "Improved my confidence in selecting and combining suitable digital tools to complete software, AI and robotics-related workplace tasks.",
  },
]



export const weeks = [
  {
    week: "Week 1",
    dates: "24 April - 1 May 2026",
    focus: "Onboarding and Research Foundations",
    tasks: [
      "Was introduced to the team, workshop and robotics research environment.",
      "Researched FoundationPose, NanoOWL and SAM to understand how AI perception technologies may support robotics applications.",
      "Discussed and planned the initial structure of the AI & Robotics Services Catalogue.",
      "Learned the basics of Docker and Docker Compose through simple experiments, including running YOLO and creating a Hello World service.",
      "Created the GitLab repository for the catalogue project.",
    ],
    learning:
      "I learned that documentation review and small-scale experiments are important for building a foundation before working with unfamiliar technologies.",
    evidence:
      "GitLab repository, initial catalogue plan, Hello World service and Docker or YOLO terminal output.",
    images: [],
  },
  {
    week: "Week 2",
    dates: "4 - 8 May 2026",
    focus: "Streamlit Catalogue Development",
    tasks: [
      "Developed the initial Streamlit interface and connected service information dynamically to the application.",
      "Added and organised additional services within the catalogue.",
      "Reviewed the project with my supervisor and implemented feedback and additional features.",
      "Documented project progress and assisted with workshop preparation for robot-training activities.",
    ],
    learning:
      "I learned that software development involves repeated testing, feedback and refinement rather than completing everything in one attempt.",
    evidence:
      "Early Streamlit interface, service-loading code, GitLab commits and project documentation.",
    images: [
      {
        src: weekTwoImage,
        alt: "Week 2 Streamlit catalogue development screenshot",
        caption:
          "Streamlit Interface Development Progress for the AI and Robotics Services Catalogue.",
      },
    ],
  },
  {
    week: "Week 3",
    dates: "11 - 15 May 2026",
    focus: "Robotics Perception and ROS 2 Fundamentals",
    tasks: [
      "Observed workshop activities and learned more about practical robotics workflows.",
      "Researched RealSense cameras, AprilTags and 6D pose estimation, and tested AprilTag detection using live camera data.",
      "Started researching NanoOWL and attempted to create a working Docker container for it.",
      "Learned ROS 2 fundamentals, including nodes, topics, publishers and subscribers.",
      "Assisted with sending a damaged robot arm for external inspection and repair.",
    ],
    learning:
      "I gained a better understanding of how cameras, computer vision and ROS 2 communication can work together within robotics applications.",
    evidence:
      "AprilTag detection result, RealSense camera output, NanoOWL Dockerfile or build logs and ROS 2 topic screenshots.",
    images: [
      {
        src: weekThreeImage,
        alt: "Week 3 robotics perception and ROS 2 fundamentals screenshot",
        caption: "AprilTag Detection Using a RealSense Camera",
      },
    ],
  },
  {
    week: "Week 4",
    dates: "18 - 22 May 2026",
    focus: "NanoOWL and RealSense Integration",
    tasks: [
      "Resolved Docker and dependency issues until the NanoOWL container could be built successfully.",
      "Added NanoOWL to the AI & Robotics Services Catalogue and began integrating it into a ROS 2 workflow.",
      "Created a containerised RealSense service to provide live camera input for object detection.",
      "Tested communication between NanoOWL, RealSense and ROS 2 through several integration approaches.",
      "Presented the catalogue to the team and gathered feedback on possible improvements and applications.",
    ],
    learning:
      "I learned that integrating multiple software components requires systematic debugging and repeated testing to identify where issues occur.",
    evidence:
      "NanoOWL container build, catalogue interface, RealSense object-detection output, ROS 2 topic output and team demonstration.",
    images: [],
  },
  {
    week: "Week 5",
    dates: "25 - 29 May 2026",
    focus: "Jetson Adaptation and Integration Checks",
    tasks: [
      "Continued checking the NanoOWL, RealSense and ROS 2 integration from the previous week.",
      "Reviewed camera feeds, ROS 2 topics and service configurations to confirm that the components were communicating correctly.",
      "Transitioned parts of the development workflow to the NVIDIA Jetson Orin platform and began adapting services for its hardware architecture.",
      "Reviewed technical issues, organised findings and completed lighter tasks.",
    ],
    learning:
      "I learned that a successful initial integration still requires verification, especially when moving software between different hardware platforms.",
    evidence:
      "Jetson terminal output, ROS 2 topic checks, camera feed, NanoOWL detection result and updated project documentation.",
    images: [],
  },
{
  week: "Week 6",
  dates: "1 - 5 June 2026",
  focus: "FoundationPose Setup and AI Models Exploration",
  tasks: [
    "Set up NVIDIA Isaac ROS and FoundationPose for robotics perception experiments.",
    "Installed the required dependencies and performed initial testing of the FoundationPose pipeline.",
    "Set up and configured SAM 3 to evaluate object detection and segmentation capabilities.",
    "Experimented with RF-DETR as an alternative AI model for robotics applications.",
    "Assisted in demonstrating the Apple Vision Pro with the Unitree G1 humanoid robot during an industry demonstration.",
    "Assisted my supervisor with robot arm experimentation and testing.",
  ],
  learning:
    "I gained a better understanding of how AI models can be incorporated into robotics workflows and learned the importance of configuring the software environment correctly before developing higher-level perception functions.",
  evidence:
    "Isaac ROS installation logs, FoundationPose setup, AI model testing screenshots and development notes.",
  images: [
    {
      src: weekSixImageTwo,
      alt: "Week 6 SAM3 segmentation test screenshot",
      caption: "Testing SAM3 Segmentation on an Image",
    },
  ],
  videos: [
    {
      src: weekSixVideo,
      title: "Apple Vision Pro and Unitree G1 Demonstration",
    },
  ],
},
{
  week: "Week 7",
  dates: "8 - 12 June 2026",
  focus: "Developing the Initial Visual Perception Pipeline",
  tasks: [
    "Started developing the initial visual perception pipeline using a water bottle as the baseline object.",
    "Prepared the water bottle 3D model for use with FoundationPose.",
    "Integrated the RealSense RGB-D camera with the RF-DETR + FoundationPose pipeline.",
    "Continued debugging FoundationPose and verifying pose estimation outputs.",
    "Tested communication between the different ROS 2 components.",
  ],
  learning:
    "I learned how a robotics visual perception pipeline combines RGB-D camera data, AI models and 3D object models to estimate an object's pose within a robotics environment.",
  evidence:
    "Water bottle 3D model, FoundationPose outputs, RViz screenshots and development notes.",
  images: [],
},
{
  week: "Week 8",
  dates: "15 - 19 June 2026",
  focus: "FoundationPose Evaluation and Multi-Object Planning",
  tasks: [
    "Continued debugging the FoundationPose pipeline from 15 to 17 June.",
    "Investigated methods for evaluating the accuracy and stability of FoundationPose.",
    "Documented the current perception workflow for discussion with my supervisor.",
    "Planned how the perception pipeline could be extended to support both the water bottle and a bin.",
    "Assisted a colleague with robot maintenance and troubleshooting.",
    "Tested the baseline RF-DETR model on industrial objects without additional fine-tuning.",
  ],
  learning:
    "By using the water bottle as a baseline object for the initial FoundationPose pipeline, I gained a better understanding of how robotics visual perception systems are developed and evaluated. I also learned that extending a perception pipeline to support multiple objects requires reliable segmentation, accurate pose estimation, appropriate 3D object models and careful workflow planning",
  evidence:
    "FoundationPose evaluation notes, workflow documentation, RF-DETR testing results and maintenance records.",
  images: [],
  videos: [
    {
      src: weekEightVideo,
      title: "FoundationPose Video",
    },
  ],
},
{
  week: "Week 9",
  dates: "22 - 26 June 2026",
  focus: "Grey Bin Dataset Preparation and Model Research",
  tasks: [
    "Re-evaluated SAM 3 for grey bin segmentation.",
    "Documented the current progress of the perception pipeline.",
    "Collected image datasets for RF-DETR fine-tuning.",
    "Researched RF-DETR fine-tuning methods and dataset preparation techniques.",
  ],
  learning:
    "I learned that dataset quality, image diversity and proper dataset organisation are important factors that influence computer vision model performance before the training process even begins.",
  evidence:
    "Grey bin image dataset, project documentation, research notes and dataset organisation.",
  images: [],
},
{
  week: "Week 10",
  dates: "29 June - 3 July 2026",
  focus: "Synthetic Dataset Generation and RF-DETR Fine-Tuning",
  tasks: [
    "Experimented with BlenderProc for synthetic image dataset generation.",
    "Generated synthetic training images using the grey bin 3D model.",
    "Prepared the combined dataset for RF-DETR fine-tuning on Google Colab.",
    "Fine-tuned the RF-DETR model using the prepared dataset and evaluated its segmentation performance.",
    "Designed the initial OCR workflow flowchart for a larger robotics project involving meter reading.",
  ],
  learning:
    "I gained practical experience in synthetic dataset generation, AI model fine-tuning and workflow planning while learning how training data quality affects model performance.",
  evidence:
    "Synthetic dataset samples, BlenderProc renders, RF-DETR training results and OCR workflow diagram.",
  images: [
    {
      src: weekTenImage,
      alt: "Week 10 3D bin model generation screenshot",
      caption: "Generating a 3D Bin Model from SAM3-Segmented 2D Bin Images.",
    },
    {
      src: weekTenSyntheticBinDatasetImage,
      alt: "Week 10 synthetic generated bin dataset screenshot",
      caption: "Synthetic Generated Bin Dataset.",
    },
    {
      src: weekTenFlowchartImage,
      alt: "Week 10 OCR workflow flowchart",
      caption: "OCR Workflow Flowchart",
    },
  ],
},
{
  week: "Week 11",
  dates: "6 - 10 July 2026",
  focus: "Perception Pipeline Integration and OCR Workflow Development",
  tasks: [
    "Connected the fine-tuned grey bin RF-DETR segmentation output to the FoundationPose pipeline and tested the integrated perception workflow.",
    "Continued debugging FoundationPose integration issues related to the bin.",
    "Developed the OCR-based meter reading workflow for a larger robotics project under my supervisor.",
    "Tested OCR extraction on captured meter images and investigated extraction failures.",
    "Applied image preprocessing techniques to improve OCR accuracy.",
    "Generated structured OCR outputs and exported extracted meter readings into CSV and Excel for further validation.",
    "Made the whole OCR workflow into slides to explain the process clearly.",
  ],
  learning:
    "I strengthened my understanding of integrating AI models into robotics perception systems and learned that OCR performance depends heavily on image quality, preprocessing techniques and iterative testing.",
  evidence:
    "FoundationPose integration results, OCR extraction logs, preprocessing outputs and Excel reports.",
  images: [],
},
]
