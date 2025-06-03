"use client";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/profile.jpg"
            alt="Shubham Chaudhari"
            width={180}
            height={180}
            className="rounded-full mx-auto border-4 border-indigo-500 shadow-2xl object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">SHUBHAM <span className="text-indigo-400">CHAUDHARI</span></h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">Crafting Intelligent Solutions with GenAI, Computer Vision, LLMs</p>
          <div className="text-lg md:text-xl text-green-400 font-mono mb-10 min-h-[60px] md:min-h-[30px]">
            <Typewriter
              options={{
                strings: [
                  // 'Building scalable AI/ML components...',
                  // 'Developing custom RAG pipelines...',
                  'Innovating in Computer Vision & GenAI.',
                  'Transforming ideas into impactful tech solutions...',
                  'Exploring the future of AI and machine learning...',
                  'Passionate about solving complex problems with technology...',
                  'Creating intelligent systems that make a difference...',
                  'Advancing the field of AI through research and development...',
                  'Empowering businesses with AI-driven insights...',
                  'Committed to lifelong learning and innovation...',
                  'Shaping the future of technology with passion and expertise...',
                  'Exploring the intersection of AI and human creativity...',
                  'Harnessing the power of data to drive decisions...',
                  'Pushing the boundaries with AI...',
                  'Transforming industries with cutting-edge technology...',
                  'Bridging the gap between technology and real-world applications...',
                  'Dedicated to making technology accessible and impactful...',
                  'Innovating at the crossroads of AI and software engineering...',
                  'Empowering teams to build smarter solutions...',
                  'Leading projects that redefine user experiences...',
                  'Exploring new frontiers in AI and machine learning...',
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 10,
              }}
            />
          </div>
        <p className="text-md sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">Currently pursuing a Master's in Computer Science (Data Science Specialization) at University of Southern California.</p>
        <p className="text-md sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">Available for Summer 2026 opportunities.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">View My Work</Link>
          <a href="/Shubham_Chaudhari_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75">Download Resume</a>
        </div>
        <div className="flex justify-center space-x-8">
          <a href="https://linkedin.com/in/shubham-ch" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-indigo-300 transition-all duration-300 transform hover:scale-125 hover:rotate-6"><FaLinkedin size={36} /></a>
          <a href="https://github.com/esoteriikos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-indigo-300 transition-all duration-300 transform hover:scale-125 hover:rotate-6"><FaGithub size={36} /></a>
        </div>
      </div>
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
      </div> */}
    </section>
  );
};
export default Hero;
