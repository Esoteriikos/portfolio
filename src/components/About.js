const About = () => {
  return (
    <section id="about" className="relative pt-24 pb-20 bg-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            I am Shubham Chaudhari, with over 3.5 years of experience in innovation labs, 
            driving applied research and collaborating with leading industry partners. 
            My background blends deep technical expertise with hands-on R&D, 
            building rapid PoTs and PoCs, and delivering end-to-end solutions, from design and development to deployment. 
            This is further complemented by impactful internships. 
            I specialize in creating intelligent systems that 
            seamlessly connect cutting-edge research with real-world impact.
          </p>
          <p>
            I thrive on collaborative challenges and am committed to continuous learning and
            innovation. Currently, I am enhancing my expertise through a Masters in
            Computer Science with a specialization in Data Science at the University of Southern California.
          </p>
          <p>
            My goal is to contribute to impactful projects that leverage data to create smarter,
            more efficient solutions for real-world problems. I am always eager to connect with
            fellow innovators, recruiters, and explore new opportunities in the AI/ML space.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
