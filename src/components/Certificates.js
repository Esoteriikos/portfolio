"use client";

import { FaCertificate } from 'react-icons/fa';


const certificatesData = [
  { 
    name: "Deep Learning Specialization (5 Courses)", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 21, 2019", 
    // verificationUrl: "https://coursera.org/verify/specialization/J3K5RRTHBF98", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "TensorFlow Developer Professional Certificate (4 Courses)", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 19, 2020", 
    // verificationUrl: "https://coursera.org/verify/professional-cert/HB6HAVF2K65W", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Generate Synthetic Images with DCGANs in Keras", 
    institution: "Coursera", 
    // date: "Jul 16, 2021", 
    // verificationUrl: "https://coursera.org/verify/FGE2RKQCKP5V", 
    logoUrl: "./images/logos/coursera.png" 
  },
  { 
    name: "Algorithmic Toolbox", 
    institution: "University of California San Diego (Coursera)", 
    // date: "Jun 25, 2020", 
    // verificationUrl: "https://coursera.org/verify/SE2G5X3MJ8VS", 
    logoUrl: "./images/logos/ucsd.png" 
  },
  { 
    name: "SQL for Data Science", 
    institution: "University of California, Davis (Coursera)",
    // date: "Jul 19, 2020", 
    // verificationUrl: "https://coursera.org/verify/SJ8E7PUNXVRA", 
    logoUrl: "./images/logos/ucdavis.png" 
  },
  { 
    name: "Build Basic Generative Adversarial Networks (GANs)", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jul 18, 2021", 
    // verificationUrl: "https://coursera.org/verify/Z7QYZX2LMAEG", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Neural Networks and Deep Learning", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 04, 2019", 
    // verificationUrl: "https://coursera.org/verify/63FANQFBB5J3", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Improving Deep Neural Networks", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 05, 2019", 
    // verificationUrl: "https://coursera.org/verify/8WUGN686XESS", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Structuring Machine Learning Projects", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 06, 2019", 
    // verificationUrl: "https://coursera.org/verify/5GFFSLYQNV2E", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Convolutional Neural Networks", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 12, 2019", 
    // verificationUrl: "https://coursera.org/verify/S8AALBM5LRAJ", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Sequence Models", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 21, 2019", 
    // verificationUrl: "https://coursera.org/verify/DWQYR5WBB6P7", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Introduction to TensorFlow for AI, ML, and DL", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Dec 13, 2019", 
    // verificationUrl: "https://coursera.org/verify/BS4NZYDJ7RY7", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Convolutional Neural Networks in TensorFlow", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Dec 15, 2019", 
    // verificationUrl: "https://coursera.org/verify/4C8XSXYXX535", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Natural Language Processing in TensorFlow", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 12, 2020", 
    // verificationUrl: "https://coursera.org/verify/YSS8QCL24QDS", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Sequences, Time Series and Prediction", 
    institution: "DeepLearning.AI (Coursera)", 
    // date: "Jan 19, 2020", 
    // verificationUrl: "https://coursera.org/verify/PGGB7UH2EP22", 
    logoUrl: "./images/logos/deeplearning-ai.png" 
  },
  { 
    name: "Machine Learning with Python", 
    institution: "Cognitive Class (IBM)", 
    // date: "Apr 17, 2020", 
    // verificationUrl: "https://courses.cognitiveclass.ai/certificates/633355bf26364bd195aa6cd73415a372", 
    logoUrl: "./images/logos/cognitive-class.png" 
  },
  { 
    name: "Python 101 for Data Science", 
    institution: "Cognitive Class (IBM)", 
    // date: "Apr 15, 2020", 
    // verificationUrl: "https://courses.cognitiveclass.ai/certificates/02c30154393f4de585776b930b9c3cdf", 
    logoUrl: "./images/logos/cognitive-class.png" 
  },
  { 
    name: "Blockchain Essentials", 
    institution: "Cognitive Class (IBM)", 
    // date: "Dec 18, 2019", 
    // verificationUrl: "https://courses.cognitiveclass.ai/certificates/e32e4e5c0bed49e5885c8659c533db5d", 
    logoUrl: "./images/logos/cognitive-class.png" 
  },  { 
    name: "Financial Markets", 
    institution: "Yale University (Coursera)", 
    // date: "Jun 14, 2020", 
    honors: true, 
    // verificationUrl: "https://coursera.org/verify/E4PHYN3R6CS4", 
    logoUrl: "./images/logos/yale.png" 
  },
  { 
    name: "Blockchain Basics", 
    institution: "University at Buffalo, SUNY (Coursera)", 
    // date: "Jul 10, 2020", 
    // verificationUrl: "https://coursera.org/verify/F7ME793K7BCC", 
    logoUrl: "./images/logos/suny-buffalo.png" 
  },
  { 
    name: "COVID-19 Contact Tracing", 
    institution: "Johns Hopkins University (Coursera)", 
    // date: "Jul 9, 2020", 
    // verificationUrl: "https://coursera.org/verify/A4G6CP2NPAFL", 
    logoUrl: "./images/logos/johns-hopkins.png" 
  },
];

// verificationUrl removed from parameter
const CertificateCard = ({ name, institution, date, honors, logoUrl }) => (
  <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-700/50 flex items-center space-x-3 transition-all duration-300 hover:shadow-indigo-500/30 hover:border-indigo-500/60 min-h-[100px] sm:min-h-[120px]"> {/* Applied similar styling to AwardCard */}
    <div className="flex-shrink-0 text-3xl opacity-100"> {/* Icon container */}
      {logoUrl && <img src={logoUrl} alt={institution} className="h-8 w-8 object-contain" />} 
      {!logoUrl && <FaCertificate className="text-indigo-400" />} 
    </div>
    <div className="flex-grow"> 
      <h3 className="text-sm font-semibold text-gray-100 leading-tight">{name}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{institution}</p>
      {date && <p className="text-xs text-gray-500 mt-0.5">{date}</p>}
      {honors && <p className="text-xs font-semibold text-yellow-400 mt-1">Completed with Honors</p>}
      {/* {verificationUrl && <a href={verificationUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-indigo-400 hover:underline mt-1 block truncate">Verify Certificate</a>} */}
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="relative pt-24 pb-20 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-5">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;