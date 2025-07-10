import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    role: 'Student Backend System Engineer',
    company: 'USC FPM - MIS',
    location: 'Los Angeles, CA, USA',
    duration: 'June 2025 - Present',
    description: [
      "Restructured and optimized the MIS system, enhancing scalability and fault tolerance for backend API workflows in production",
      "Collaborated on MIS data pipelines, enabling real-time analytics and supporting expansion of operational dashboards",
    ],
  },
  {
    role: 'Volunteer Full Stack AI Engineer',
    company: 'Lumina AI Health Institute (Non-Profit)',
    location: 'Los Angeles, CA, USA',
    duration: 'June 2025 - August 2025',
    description: [
      "Implemented TTS/STT solutions for custom AI agents and chatbots, integrating Twilio to enhance business workflow automation",
      "Built modular AI pipelines to streamline voice-data processing, leveraging Gemini to extract user intent and trigger dynamic actions like querying health databases to assist patients in real time",
    ],
  },
  {
    role: 'AI ML Engineer II',
    company: 'HERE Technologies, Tech. Innovation Lab',
    location: 'Mumbai, India',
    duration: 'Aug 2024 - Dec 2024',
    description: [
      "Engineered context-aware AI coding assistant by fine-tuning CodeQwen and implementing a LangChain RAG pipeline querying proprietary Java SDKs from a vector database, all managed within a robust LLMOps framework, leading to a 30% rise in productivity",
      "Constructed data ingestion and ETL pipeline for RAG, parsing multiple file formats with a hybrid approach of LlamaParse and custom scripts improving context-aware chunking to preserve semantic integrity, diminishing LLM token overhead by 40%",
      "Implemented a cross-encoder re-ranker within a hybrid retrieval system with prompt fine tuning and guardrails for response quality achieving 40% lift in contextual accuracy over baseline vector search and providing cleaner context to LLM generator model",
    ],
  },
  {
    role: 'AI ML Engineer',
    company: 'Tata Consultancy Service, RSI Nucleus Lab',
    location: 'Mumbai, India',
    duration: 'July 2021 - July 2024',
    description: [
      "Led development of multi-camera vision pipeline integrating OpenPose, OpenCV with data from IoT load sensors using Pub/Sub messaging system to track end-to-end customer journey in autonomous store, decreasing checkout times by over 80%",
      "Developed two targeted solutions utilizing Azure Vision Studio: Custom shelf-monitoring model cutting stockout and spoilage delays by 65%, and CCTV video summarization and text querying service fetching incident reducing incident review time by 70%",
      "Devised generative AI pipeline for automated cataloging, enabling 2D virtual try-ons via Super-Resolution CNNs and GANs cutting production time from weeks to hours, while prototyping 3D reconstruction (NeRFs/Splatting) creating interactive assets from 2D images",
      "Optimized models for edge deployment on NVIDIA Jetson devices, using ONNX, TensorRT and model quantization boosting real-time item recognition achieving 7x faster inference",
      "Spearheaded collaborative efforts 'TechFM' knowledge-sharing program, training 400+ colleagues and 1000+ Bachelor’s students in practical AI/ML concepts, fostering a culture of technical excellence and continuous learning",
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Tata Consultancy Service, Life Science',
    location: 'Mumbai, India',
    duration: 'Feb 2021 - May 2021',
    description: [
      "Engineered predictive models for Materiovigilance, utilizing Lasso regression for feature selection and XGBoost for high-accuracy prediction, which boosted the early detection of adverse events by 60%",
      "Led the design and deployment of a Python-based  Streamlit analytics dashboard, providing healthcare professionals with real-time, actionable insights from MongoDB data and accelerating clinical response times",

    ],
  },
];

const ExperienceItem = ({ role, company, location, duration, description }) => (
  <div className="mb-12 pl-4 relative border-l-2 border-indigo-500">
    <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-indigo-500 rounded-full border-4 border-gray-900"></div>
    <div className="ml-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-1">{role}</h3>
      <div className="text-sm text-gray-400 mb-2 flex flex-col sm:flex-row sm:items-center">
        <span className="flex items-center mr-4 mb-1 sm:mb-0">
          <FaBuilding className="mr-2 text-indigo-400" /> {company}
        </span>
        <span className="flex items-center">
          <FaCalendarAlt className="mr-2 text-indigo-400" /> {duration}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-3">{location}</p>
      <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-sm sm:text-base">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative pt-24 pb-20 bg-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
