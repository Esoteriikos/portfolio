import { FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    role: 'AI ML Engineer II',
    company: 'HERE Technology, Tech. Innovation Lab',
    location: 'Mumbai, India',
    duration: 'Aug 2024 - Dec 2024',
    description: [
      'Devised and built RAG-based LLM pipelines applying LangChain to auto-generate code and documentation for internal Java SDKs, boosting developer productivity by up to 30% and reducing ticket backlog by 50%.',
      'Accelerated knowledge retrieval using optimized RAG + vector DBs, enhancing processing efficiency by 40%.',
      'Designed and optimized scalable AI/ML components, including data loaders and LLM model re-ranking, reducing latency by 50+% and improving user rating by 15% in enterprise models.',
    ],
  },
  {
    role: 'AI ML Engineer',
    company: 'Tata Consultancy Service, RSI Nucleus Lab',
    location: 'Mumbai, India',
    duration: 'July 2021 - July 2024',
    description: [
      'Developed and deployed computer vision-based cashier-less retail solutions (Autonomous Store, Smart Cart, Freshness Monitoring), improving real-time item recognition accuracy by 30% and optimizing for IoT hardware.',
      'Reduced shelf replenishment and spoilage delays by 60+% and diminished checkout times by over 80%, significantly increasing operational efficiency.',
      'Implemented real-time inventory management and freshness monitoring using Azure and image processing/Deep Learning, integrating with Future Store Observability dashboard.',
      "Led 'TechFM' knowledge-sharing initiative, conducting AI/ML & OpenCV workshops, upskilling 400+ professionals & 1000+ students, increasing engagement by 40%.",
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Tata Consultancy Service, Life Science',
    location: 'Mumbai, India',
    duration: 'Feb 2021 - May 2021',
    description: [
      'Implemented ML models (Lasso, XGBoost, scikit-learn) for Signal Detection in Materiovigilance, enhancing early adverse event detection by 25%.',
      'Led development of an analytics dashboard integrating AI models with unstructured MongoDB data (Python, Pandas), improving healthcare professional response time.',
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
