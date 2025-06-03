// src/components/Publications.js
"use client";

import { FaFileAlt, FaNewspaper, FaLink } from 'react-icons/fa'; // Or other suitable icons

const publicationsData = [
  {
    title: "A Hybrid approach towards Signal Management in PV",
    type: "International Whitepaper", 
    authors: "Shubham Chaudhari, et al.",
    publicationDetails: "European Pharmaceutical Review", 
    year: "2022", 
    link: "https://www.europeanpharmaceuticalreview.com/whitepaper/172103/whitepaper-a-hybrid-approach-towards-signal-management-in-pv/", 
    // abstractSnippet: "A brief snippet of the abstract...", 
    keywords: ["Machine Learning", "Statistical Data Mining", "VigiRank", "Signal Management", "Signal Processing", "Pharmacovigilance"], 
    icon: <FaFileAlt className="text-teal-400" />
  },
  {
    title: "A Synopsis of Monocular Depth Estimation",
    type: "International Research Paper (Conference Presentation)",
    authors: "Shubham Chaudhari, et al.", 
    publicationDetails: "ICDSMLA (Published by Springer)",
    year: "2021", // 
    link: "https://link.springer.com/chapter/10.1007/978-981-16-3690-5_18", 
    // abstractSnippet: "Overview of monocular depth estimation techniques...", 
    keywords: ["Depth Estimation", "Computer Vision", "Deep Learning", "UNet", "CNN", "3D Reconstruction", "Point cloud"], 
    icon: <FaNewspaper className="text-sky-400" />
  },
];

const PublicationCard = ({ title, type, authors, publicationDetails, year, link, abstractSnippet, keywords, icon }) => (
  <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-700/50 flex flex-col justify-between transition-all duration-300 hover:shadow-indigo-500/30 hover:border-indigo-500/60 min-h-[170px] sm:min-h-[190px]">
    <div>
      <div className="flex items-start space-x-3 mb-2">
        <div className="flex-shrink-0 text-2xl opacity-80 mt-1">
          {icon || <FaFileAlt className="text-gray-400" />}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-100 leading-tight">{title}</h3>
          <p className="text-xs text-indigo-300 mt-0.5">{type}</p>
        </div>
      </div>
      {authors && <p className="text-xs text-gray-400 mb-1">Authors: {authors}</p>}
      {publicationDetails && <p className="text-xs text-gray-400 mb-1">{publicationDetails} {year && year !== "YYYY" && `(${year})`}</p>}
      {abstractSnippet && <p className="text-[11px] text-gray-500 italic my-2 leading-snug line-clamp-3 hover:line-clamp-none">{abstractSnippet}</p>} {/* line-clamp-3 for brevity, expands on hover if you want */}
      {keywords && keywords.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {keywords.map(kw => <span key={kw} className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded inline-block">{kw}</span>)}
        </div>
      )}
    </div>
    {link && link !== "#" && !link.startsWith("URL_TO_PAPER") && ( // Only show button if link is valid and not a placeholder
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full text-center bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium py-2 px-3 rounded-md transition-colors duration-300 transform hover:scale-[1.02]"
      >
        Read More / View <FaLink className="inline ml-1 text-[10px]" />
      </a>
    )}
  </div>
);

const Publications = () => {
  return (
    <section id="publications" className="relative pt-24 pb-20 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">
            Papers & Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {publicationsData.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;