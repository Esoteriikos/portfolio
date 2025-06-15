"use client"; 
// import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Real-Time Data Streaming & Analytics Platform',
    image: './images/projects/data-streamer.jpg', 
    description:
      'Architected a fully containerized, real-time data platform using Docker Compose to orchestrate a multi-service environment including Kafka, Zookeeper, and PostgreSQL. Implemented the data ingestion layer using Airbyte to reliably extract data from external REST APIs and publish it to a central Apache Kafka streaming backbone for decoupled processing. Engineered a custom Python consumer service (kafka-python, psycopg2) to subscribe to Kafka topics, perform in-stream data validation and transformation, and load structured data into PostgreSQL. Enabled end-to-end data visibility and analysis by integrating the data warehouse with Metabase for real-time BI dashboarding and Kafdrop for live Kafka topic monitoring.',
    tech: [
      'Python', 
      'Airbyte', 
      'Kafka', 
      'PostgreSQL',
      'Docker',
      'Docker Compose',
      'Zookeeper',
      'Metabase',
      'Kafdrop',
      'Data Transformation',
      'Data Ingestion',
      'Data Visualization/Analytics',
      'Data Monitoring',
      'Data Orchestration', 

    ],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/data_streamer', 
    // date: 'October 2024 - November 2024',
  },
  {
    title: 'Waste Classification with Deep Learning & Transfer Learning',
    image: './images/projects/waste-classification.png',
    description:
      'Developed a waste classification pipeline using TensorFlow and Keras, leveraging transfer learning with pre-trained CNNs (ResNet, EfficientNet, VGG) for robust multi-class image recognition. Automated data preprocessing, augmentation, and class imbalance handling with class weights. Implemented parallelized data loading and efficient pipelines using tf.data.Dataset. Enhanced skills in model evaluation, experiment tracking, and result visualization. Applied deep learning and parallelization techniques to address a practical waste management problem.',
    tech: [
      'Python',
      'TensorFlow',
      'Keras',
      'Transfer Learning',
      'ResNet',
      'EfficientNet',
      'VGG',
      'tf.data.Dataset',
      'Image Augmentation',
      'Class Imbalance Handling',
      'Parallelization',
      'Data Preprocessing',
      'Model Evaluation',
      'Experiment Tracking',
      'Data Visualization'
    ],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/Transfer-Learning_Waste-Classification',
    // date: 'April 2025 - June 2025',
  },
  {
    title: 'Product Attribute Prediction from Images Meesho Challenge',
    image: './images/projects/attribute-prediction.jpg', 
    description:
      'Developed a deep learning model to automatically predict product attributes (like color, pattern, sleeve length) from product images. This solution tackles discrepancies in e-commerce listings—such as mismatched text and images—and helps sellers streamline catalog entry. The model was built using PyTorch and vision transformers (Swin), enabling real-time attribute suggestions at scale. The solution significantly improves listing accuracy, reduces manual effort, and enhances user trust.',
    tech: [
      'Python', 
      'PyTorch', 
      'Computer Vision', 
      'Swin Transformers', 
      'Image Classification', 
      'Pandas', 
      'DataLoader', 
      'Torchvision', 
      'PIL'
    ],
    liveLink: null,
    // githubLink: 'https://github.com/your-repo-link', 
    // date: 'October 2024 - November 2024',
  },
  {
    title: 'Home Automation System',
    image: './images/projects/home-automation.png', 
    description:
      'Architected and built a self-hosted automation platform integrating IoT hardware, video streaming, file backup, and network security, creating a 100% secure, comprehensive home automation ecosystem with remote access and unlimited backup.',
    tech: ['Linux', 'ESP32', 'Cloudflare', 'Home Assistant', 'IoT'],
    liveLink: null, 
    // githubLink: 'https://github.com/shubham-ch9/home-automation-project', // Example, replace
    // date: 'Aug 2023 - Dec 2024',
  },
  {
    title: 'Monocular Depth Estimation',
    image: './images/projects/depth-estimation.jpg', 
    description:
      'Engineered an end-to-end ML pipeline for monocular depth estimation using custom deep learning models (U-Net) trained on KITTI/Cityscapes. Reduced processing latency by 50% using TensorRT for inference and applied MLOps practices.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'TensorRT', 'U-Net', 'MLOps'],
    liveLink: null,
    // githubLink: 'https://github.com/shubham-ch9/monocular-depth-project', 
    // date: 'Jan 2021 - June 2021',
  },

  {
    title: 'Detect Retina Damage from OCT Images',
    image: './images/projects/retina-oct.jpg', // Make sure this image exists or replace with actual path
    description:
      'Built a deep learning model using EfficientNet to detect retinal conditions such as CNV, DME, AMD, and normal retinas from high-resolution OCT (Optical Coherence Tomography) scans. This project addresses the time-intensive nature of manual retinal image analysis, automating disease classification to assist ophthalmologists with early diagnosis. Leveraged data augmentation, transfer learning, and advanced CNN architectures for robust performance on noisy medical data.',
    tech: [
      'Python', 
      'TensorFlow', 
      'OpenCV',
      'EfficientNet', 
      'Computer Vision', 
      'Medical Imaging', 
      'Keras', 
      'ImageDataGenerator', 
      'Matplotlib', 
      'OpenCV', 
      'Pandas'
    ],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/Detect-Retina-Damage-from-OCT-images', 
    // date: 'September 2024 - October 2024',
  },
  {
    title: 'Emotion Recognizer from Images, Video & Webcam',
    image: './images/projects/emotion-recognizer.jpg',
    description:
      'Developed a real-time emotion recognition system that detects human faces from images, videos, or webcam streams and classifies emotions such as happy, sad, angry, and surprised using a custom-built CNN model. The pipeline includes face detection, prediction, and annotated output generation. The system supports multithreading for performance and is deployed via a Flask web app with file upload support using Flask-Dropzone.',
    tech: [
      'Python', 
      'TensorFlow',
      'Tensorboard', 
      'Keras', 
      'OpenCV', 
      'Face Recognition', 
      'Custom CNN Model', 
      'Flask', 
      'Multithreading', 
      'Real-time Video Processing'
    ],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/emotion-recognizer',
    // date: 'June 2024 - July 2024',
  },


  {
    title: 'Automated Vaccine Slot Detection Assistant',
    image: './images/projects/vaccine-slot.jpg',
    description:
      'Engineered a real-time data processing and notification system, integrating multiple APIs with custom filtering algorithms for COVID-19 vaccine slot detection and booking automation during the pandemic. Also implemented Selinium for automated booking.',
    tech: ['Python', 'JavaScript', 'Heroku', 'API Integration', 'Data Engineering', 'Flask', 'Selinium' , 'HTML', 'CSS', 'Bootstrap'],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/CoWin-ASAP',
    // date: 'March 2021 - April 2021',
  },

  {
    title: 'WeatherApp',
    image: './images/projects/weather-app.jpg', // REPLACE/ENSURE this image exists
    description:
      'Application that delivers real-time weather updates for any city across the globe. Built with a focus on simplicity and usability, the app fetches and displays key weather metrics such as temperature, humidity, wind speed, and forecasts using the OpenWeatherMap API. It also integrates data visualization for a better user experience.',
    tech: ['Python', 'Sentry', 'API Integration', 'Plotly', 'Streamlit', 'Render', 'Pandas'],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/WeatherAPP',
    // date: 'March 2021 - April 2021',
  },
  {
    title: 'Plant Disease Detection',
    image: './images/projects/plant-disease.jpg', 
    description:
      'Developed a deep learning model to accurately detect and classify plant leaf diseases using high-variance image data. Addressed critical challenges in agricultural disease diagnosis such as multiple infections on a single leaf, rare classes, and environmental variation (light, angle, age). Leveraged EfficientNet and data augmentation techniques to improve model generalization. Integrated expert-driven labeling and regularization to enhance the model’s ability to identify relevant features under diverse real-world conditions.',
    tech: [
      'Python', 
      'TensorFlow', 
      'Tensorboard',
      'Computer Vision', 
      'EfficientNet', 
      'Custom CNN Model',
      'Pandas',
      'OpenCV',
      'sklearn',
      'Image Classification',
      'Transfer Learning',
      'Keras',
      'Data Augmentation', 
      'Model Regularization', 
      'Matplotlib'
    ],
    liveLink: null,
    githubLink: 'https://github.com/Esoteriikos/Plant-Pathology', 
    // date: 'August 2024 - September 2024',
  }

];

const ProjectCard = ({ title, image, description, tech, liveLink, githubLink, date }) => (
  // <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50 flex flex-col">
  //   {image && (
  //     <div className="relative w-full h-56 sm:h-64">
  //       <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
  //     </div>
  //   )}
  <div className="group bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/60 hover:border-indigo-500/70 flex flex-col"> {/* Added group here */}
    {image && (
      <div className="w-full h-56 sm:h-64 overflow-hidden"> 
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Fills container, scales on group hover
          loading="lazy" 
        />
      </div>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs text-indigo-400 mb-1">{date}</p>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="bg-indigo-700 text-indigo-100 text-xs px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-4 pt-2 border-t border-gray-700">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub size={20} className="mr-1" /> GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center"
            aria-label={`Live demo of ${title}`}
          >
            <FaExternalLinkAlt size={18} className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative pt-24 pb-20 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
