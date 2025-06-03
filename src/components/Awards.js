// src/components/Awards.js
"use client"; // If you plan to add any hover effects that use state, otherwise optional

import { FaAward, FaTrophy } from 'react-icons/fa'; // Or other suitable icons

const awardsData = [
  {
    name: "CLP Faculty Award",
    issuer: "Tata Consultancy Services",
    year: "2023", 
    icon: <FaAward className="text-yellow-400" />
  },
  {
    name: "AIP Anchor Award",
    issuer: "Tata Consultancy Services",
    year: "2021", 
    icon: <FaTrophy className="text-amber-500" />
  },
  {
    name: "BPS Champions League - Team Award",
    issuer: "Tata Consultancy Services",
    year: "2022", 
    icon: <FaAward className="text-sky-400" />
  },
  {
    name: "Innovista Sparkles",
    issuer: "Tata Consultancy Services (Innovista)",
    // year: "", 
    icon: <FaTrophy className="text-pink-400" />
  },
  {
    name: "Innovista Top Seeds",
    issuer: "Tata Consultancy Services (Innovista)",
    // year: "",
    icon: <FaAward className="text-green-400" />
  },
];

const AwardCard = ({ name, issuer, year, icon }) => (
  <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-700/50 flex items-center space-x-3 transition-all duration-300 hover:shadow-indigo-500/30 hover:border-indigo-500/60">
    <div className="flex-shrink-0 text-3xl opacity-80 group-hover:opacity-100 transition-opacity">
      {icon || <FaAward className="text-gray-400" />}
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-100 leading-tight">{name}</h3>
      <p className="text-xs text-gray-400">
        {issuer} {year && `(${year})`}
      </p>
    </div>
  </div>
);

const Awards = () => {
  return (
    <section id="awards" className="relative pt-24 pb-20 bg-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8"> 
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div> 
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">
            Awards & Recognitions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;