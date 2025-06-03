import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    institution: 'University of Southern California',
    degree: 'Master of Science in Computer Science - Data Science',
    duration: 'Jan 2025 - Exp. Dec 2026',
    location: 'California, USA',
    courses: ['CSCI 570: Analysis of Algorithm', 
      'DSCI 552: Machine Learning for Data Science',
      'CSCI 585: Database Systems',],
    icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
  },
  {
    institution: 'Vidyalankar Institute of Technology, University of Mumbai',
    degree: 'Bachelor of Engineering in Computer',
    duration: 'July 2017 - June 2021',
    location: 'Mumbai, India',
    courses: ['CGPA: 9.14/10'],
    icon: <FaUniversity className="text-indigo-400 text-3xl" />,
  },
];

const EducationItem = ({ institution, degree, duration, location, courses, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-300 mb-1">{institution}</h3>
        <p className="text-md text-gray-200">{degree}</p>
        <p className="text-sm text-gray-400 mt-1">{duration} | {location}</p>
        {courses && courses.length > 0 && (
          <div className="mt-3">
            <h4 className="text-sm font-medium text-gray-300 mb-1">Relevant:</h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-400 space-y-1">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="relative pt-24 pb-20 bg-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-1">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;
