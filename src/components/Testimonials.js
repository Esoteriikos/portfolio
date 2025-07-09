"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaQuoteLeft, FaQuoteRight, FaLinkedin } from 'react-icons/fa';

const testimonialsData = [

  {
    name: "Anisha Udayakumar",
    title: "AI Evangelist @ Intel",
    relation: "Managed Shubham directly",
    // linkedin: "https://www.linkedin.com/in/anisha-udayakumar/", // Example
    quote: "Shubham was a standout AI/ML Engineer during our time together at TCS’s Retail Research Lab. He played a pivotal role in our Generative AI projects, consistently helping in delivering innovative solutions that pushed our initiatives forward. His technical expertise, combined with a practical approach, made a significant impact on our work. Beyond his technical skills, Shubham was an excellent collaborator, always willing to share his knowledge and mentor others. His passion for AI and clear communication made him an invaluable team member. It was always a pleasure to work with him."
  },
  {
    name: "Priyanka Dash",
    title: "Products, Innovation & Strategy @ TCS Retail Supply Chain",
    relation: "Worked with Shubham on the same team",
    // linkedin: "https://www.linkedin.com/in/priyanka-dash-ximb/", // Example
    quote: "I've worked with Shubham for over 2 years and i can say, without a doubt that Shubham is an absolute gem, in terms of skills, professionalism and as a person! He is very research oriented and his knowledge in the field of machine learning and AI is vast. He would be one of the very few people you meet in life, who are highly intelligent, yet humble. Shubham was very helpful, patient and understanding, as a team member. His on-time delivery attitude ensured problems were tackled within a stipulated timeline, without any spillovers. It was a delightful experience to work with him because there was never a dull moment when he was around."
  },
  {
    name: "Jasvin James",
    title: "Cloud Platform Engineer @ MathWorks",
    relation: "Jasvin and Shubham studied together",
    // linkedin: "https://www.linkedin.com/in/anisha-udayakumar/", // Example
    quote: "Shubham is one of the most technically creative and hard working people I know. His knowledge of AI & ML coupled with his background in electronics and hardware is amazing. Something that always stands out to me is the home automation smart system that he and his brother kicked off and pretty much 'smartified' their whole house which shows how curious he is and how he will relentlessly pursue a goal to its fruition."
  },
  {
    name: "Balamurali Venkatesan",
    title: "Head - Retail Research Centre @ Tata Consultancy Services",
    relation: "Managed Shubham directly",
    // linkedin: "https://www.linkedin.com/in/balamurali-venkatesan-32374010/", // Example
    quote: "Shubham is a remarkable professional whose commitment and dedication are truly commendable. Having worked with him for 3 years, I have consistently been impressed with the depth of his knowledge, the rigor of his methodology, and the passion he brings to his work. Shubham has a keen ability to translate complex AI concepts into actionable insights... His contributions are sure to be a valuable asset to any team."
  },
  {
    name: "Jagjit Dhadial",
    title: "Product Manager @ Tata Consultancy Services",
    relation: "Worked with Shubham on the same team",
    // linkedin: "https://www.linkedin.com/in/jagjitdhadial/", // Example, replace
    quote: "Shubham has deep expertise in AI and machine learning has been instrumental in driving innovative solutions that are not only cutting-edge but also impactful for our business. His ability to translate complex technical concepts into practical applications has led to the development of several key initiatives that have significantly enhanced our retail operations and customer experiences. His dedication, creativity, and relentless pursuit of excellence set a high standard for the entire team."
  },
  {
    name: "Aryan Dash",
    title: "Software Engineer @ Tata Consultancy Services",
    relation: "Shubham was senior to Aryan but didn't manage Aryan directly",
    // linkedin: "https://www.linkedin.com/in/aryan-dash/", // Example
    quote: "Shubham is one of the most dedicated seniors I have had the privilege of working with and being mentored by. His knowledge of Machine Learning is exceptional, and he consistently approaches challenges with a problem-solving mindset. This ability helps make use cases concise and ensures timely delivery. Additionally, Shubham is one of the kindest and most professional colleagues I have ever worked with."
  },
  {
    name: "Rohit Vardam",
    title: "Graduate Student in Software Engineering at SJSU",
    relation: "Worked with Shubham on the same team",
    // linkedin: "https://www.linkedin.com/in/rohitvardam/", // Example
    quote: "Shubham is a dedicated and innovative individual. He researched the complex monocular depth estimation problem and came up with a Res Unet CNN to solve it with a great result. It is a pleasure to work with him because of his punctuality and passion that acts as a catalyst to make his peers more productive."
  }
];

const TestimonialCard = ({ name, title, relation, quote, linkedin }) => (
  <div className="embla__slide flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 p-4">
    <div className="h-full bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-xl border border-slate-700/50 flex flex-col justify-between hover:border-indigo-500/70 transition-colors duration-300">
      <div>
        <FaQuoteLeft className="text-indigo-400 text-3xl opacity-70 mb-4" />
        <p className="text-gray-300 text-sm leading-relaxed mb-6 italic min-h-[120px] sm:min-h-[150px]">{quote}</p>
        <FaQuoteRight className="text-indigo-400 text-3xl opacity-70 mt-4 ml-auto" />
      </div>
      <div className="mt-auto pt-4 border-t border-slate-700/50">
        <p className="font-semibold text-indigo-300 text-center text-md mt-3">{name}</p>
        <p className="text-xs text-gray-400 text-center mb-1">{title}</p>
        <p className="text-xs text-gray-500 text-center">{relation}</p>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="block text-center mt-2 text-indigo-400 hover:text-indigo-300">
            <FaLinkedin className="inline mr-1" /> View Profile
          </a>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, setScrollSnaps]);

  return (
    <section id="testimonials" className="relative pt-24 pb-20 bg-gray-800 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>

        <div className="embla overflow-hidden -mx-4" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out
                          ${index === selectedIndex ? 'bg-indigo-500 scale-125' : 'bg-slate-600 hover:bg-slate-500'}
                       `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;