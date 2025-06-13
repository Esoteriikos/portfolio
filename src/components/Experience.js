import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    role: 'AI ML Engineer II',
    company: 'HERE Technologies, Tech. Innovation Lab',
    location: 'Mumbai, India',
    duration: 'Aug 2024 - Dec 2024',
    description: [
      "Architected and developed an end-to-end GenAI assistant with LangChain and CodeQwen, leveraging a custom-configured vector database to query internal Java SDKs",
      "Built a high-fidelity data ingestion pipeline using LlamaParse and custom PyPDF parsers, optimizing document chunking strategies which enhanced LLM processing efficiency by 40%",
      "Engineered a hybrid retrieval system with a cross-encoder re-ranker to boost contextual accuracy by 25% over baseline vector search, delivering superior context to the generator model",
      "Established a robust LLMOps framework: utilized Apache Airflow for data orchestration, Docker for containerization, and MLflow for experiment tracking, leading to a 30% rise in developer productivity",
    ],
  },
  {
    role: 'AI ML Engineer',
    company: 'Tata Consultancy Service, RSI Nucleus Lab',
    location: 'Mumbai, India',
    duration: 'July 2021 - July 2024',
    description: [
      "Architected a multi-camera vision pipeline integrating OpenPose, OpenCV with data from IoT load sensors using Pub/Sub messaging system to track end-to-end customer journey  in an autonomous store, reducing checkout times by over 80%",
      "Developed two targeted solutions on Azure Vision Studio: 1) A custom shelf-monitoring model that cut stockout and spoilage delays by 60%, and 2) A CCTV video summarization service that reduced incident review time by 70%",
      "Pioneered a generative AI pipeline for instant e-commerce cataloging; integrated Super-Resolution CNNs and GANs to perform virtual clothing try-ons from a single 2D image, cutting catalog production time from weeks to hour",
      "Optimized models for edge deployment on NVIDIA Jetson devices, using ONNX, TensorRT and model quantization to boost real-time item recognition to achieve 7x faster inference",
      "Spearheaded the 'TechFM' knowledge-sharing program, training 400+ colleagues and 1000+engineering  students in practical AI/ML concepts, fostering a culture of technical excellence and continuous learning"
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Tata Consultancy Service, Life Science',
    location: 'Mumbai, India',
    duration: 'Feb 2021 - May 2021',
    description: [
      "Engineered predictive models for Materiovigilance, utilizing Lasso regression for feature selection and XGBoost for high-accuracy prediction, which boosted the early detection of adverse events by 25%",
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
