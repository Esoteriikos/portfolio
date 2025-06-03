// import Image from 'next/image';
import {
  FaPython, 
  FaJs, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDocker, 
  // FaNodeJs, 
  // FaAws, 
  FaDatabase,
  FaLinux,
  FaCloud,
} from 'react-icons/fa';
import { SiTensorflow, 
  SiPytorch, 
  SiKeras, 
  // SiNvidia, 
  SiFastapi, 
  SiFlask, 
  SiStreamlit, 
  SiMongodb, 
  SiScikitlearn,
  // SiXdotOrg,
  SiOnnx,
  SiMlflow,
  // SiKubernetes,
  SiJupyter,
  SiPostman,
  SiPlotly,
  // SiTableau,
  // SiPowerbi,
  // SiLooker,
  SiGrafana,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  // SiFirebase,
  SiRedis,
  // SiElasticsearch,
  // SiLightgbm,
  // SiLightgbm,
  // SiXgboost,
  // SiNumpy,
  // SiPandas,
  // SiOpenCV,
  // SiScikit,  
  // SiVisualstudiocode,
  // SiApacheairflow,
  // SiMicrosoft,
  // SiMicrosoftazure, 
  // SiCloud66, 
  SiOpenai } from 'react-icons/si';

const skillsData = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython className="text-yellow-400" />, level: 'Primary' },
      { name: 'React', icon: <FaReact className="text-yellow-500" />},
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />},
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />},
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />},
    ],
  },
  {
    category: 'AI/ML/DL Frameworks & Libraries',
    items: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
      { name: 'Keras', icon: <SiKeras className="text-red-600" /> },
      { name: 'PyTorch', icon: <SiPytorch className="text-orange-600" /> },
      // { name: 'Nvidia (CUDA)', icon: <SiNvidia className="text-green-500" /> },
      { name: 'Transformers', icon: <span className="text-purple-400 text-4xl">🤖</span> },
      { name: 'Numpy', icon: <span className="text-blue-400 text-4xl">🔢</span> },
      { name: 'Pandas', icon: <span className="text-gray-400 text-4xl">🐼</span> },
      { name: 'OpenCV', icon: <span className="text-blue-500 text-4xl">👁️</span> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-yellow-500" /> },
      // { name: 'LightGBM'},
      { name: 'XGBoost', icon: <img src="./images/logos/xgboost.png" alt="XGBoost" width=32 height=32 className="w-8 h-8" /> },
      { name: 'ONNX', icon: <SiOnnx className="text-blue-400" /> },
    ],
  },
    {
    category: 'Core Expertise',
    items: [
      { name: 'AI/ML', icon: <span className="text-indigo-400 text-4xl">💡</span> },
      { name: 'Computer Vision', icon: <span className="text-cyan-400 text-4xl">📷</span> },
      { name: 'Generative AI', icon: <span className="text-pink-400 text-4xl">✨</span> },
      { name: 'Multi-modal AI', icon: <span className="text-purple-400 text-4xl">🔗</span> },
      { name: 'Image & Video Processing', icon: <span className="text-lime-400 text-4xl">🖼️</span> },
      { name: 'Data Science', icon: <FaDatabase className="text-sky-400" />},
      { name: 'MLOps', icon: <span className="text-purple-400 text-4xl">⚙️</span> },
      { name: 'LLMOps', icon: <span className="text-purple-400 text-4xl">⚙️</span> },
      { name: 'Model Optimization & Deployment', icon: <span className="text-yellow-400 text-4xl">🚀</span> },
      { name: 'AI/ML Systems Design', icon: <span className="text-gray-400 text-4xl">🧩</span> },
      { name: 'Monitoring & Observability', icon: <span className="text-blue-400 text-4xl">📊</span> },
      // { name: 'AI Research', icon: <span className="text-blue-400 text-4xl">🔬</span> },
      // { name: 'AI Product Development', icon: <span className="text-green-400 text-4xl">📦</span> },
      // { name: 'AI Strategy & Consulting', icon: <span className="text-orange-400 text-4xl">🗺️</span> },
      { name: 'AI Ethics & Governance', icon: <span className="text-red-400 text-4xl">⚖️</span> },

    ],
  },  
  {
    category: 'LLM Development',
    items: [
      { name: 'Custom LLM Training', icon: <SiOpenai className="text-teal-500" /> },
      { name: 'RAG Pipelines', icon: <span className="text-green-400 text-4xl">🔗</span> },
      { name: 'LangChain', icon: <span className="text-yellow-400 text-4xl">🦜</span> }, // Emoji for LangChain
      // { name: 'Azure OpenAI', icon: <SiMicrosoftazure className="text-blue-600" /> },
      { name: 'Azure OpenAI', icon: <FaCloud  className="text-blue-600" /> },
      { name: 'Hugging Face', icon: <span className="text-purple-500 text-4xl">🤗</span> }, // Emoji for Hugging Face
      // { name: 'OpenAI API', icon: <SiOpenai className="text-teal-500" /> },
      // { name: 'LLMOps', icon: <span className="text-purple-400 text-4xl">⚙️</span> },
      // { name: 'Model Optimization', icon: <span className="text-yellow-400 text-4xl">🚀</span> },
      // { name: 'Model Deployment', icon: <span className="text-gray-400 text-4xl">📦</span> },
      { name: 'Data loaders', icon: <span className="text-blue-400 text-4xl">📥</span> }, // Emoji for data loaders
      { name: 'Guardrails', icon: <span className="text-red-500 text-4xl">🛡️</span> }, // Emoji for Guardrails
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-500" /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
      { name: 'Streamlit', icon: <SiStreamlit className="text-red-500" /> },
      // { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
      { name: 'MLflow', icon: <SiMlflow className="text-purple-500" /> },
      // { name: 'Airflow', icon: <SiApacheairflow className="text-green-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      // { name: 'VS Code' },
      { name: 'Linux', icon: <FaLinux className="text-black" /> },
      { name: 'Jupyter', icon: <SiJupyter className="text-orange-300" /> },
    ],
  },
  {
  category: 'Databases',
  items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-gray-500" /> },
      // { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
      // { name: 'Elasticsearch', icon: <SiElasticsearch className="text-orange-400" /> },
    ],
  },
  {
  category: 'Data Visualization',
  items: [
      { name: 'Matplotlib', icon: <SiPlotly className="text-blue-500" /> },
      { name: 'Seaborn', icon: <span className="text-indigo-400 text-4xl">🌊</span> },
      { name: 'Plotly', icon: <SiPlotly className="text-pink-500" /> },
      // { name: 'Tableau', icon: <SiTableau className="text-orange-500" /> },
      // { name: 'Power BI', icon: <SiPowerbi className="text-yellow-500" /> },
      // { name: 'Looker', icon: <SiLooker className="text-purple-500" /> },
      { name: 'Streamlit Charts', icon: <SiStreamlit className="text-red-500" /> },
      { name: 'Grafana', icon: <SiGrafana className="text-orange-400" /> },
    ],
  },
];

const SkillItem = ({ name, icon, level }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-indigo-500/30 transition-shadow duration-300 transform hover:scale-105">
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-sm font-semibold text-gray-200">{name}</p>
    {level && <p className="text-xs text-gray-400">{level}</p>}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative pt-24 pb-20 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>
        <div className="space-y-12">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category}> 
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center sm:text-left">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {skillCategory.items.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} /> // Unique key per skill item within category
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
