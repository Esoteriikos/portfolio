"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react'; // Import useState for submission status

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfC9qZKWKz0_lQ0Zhsc2VyOwM1UaLbh3_joeT8hE0A4MhDLpA/formResponse"; // <<-- REPLACE THIS
  const NAME_ENTRY_ID = "entry.530280083"; 
  const EMAIL_ENTRY_ID = "entry.760381625";
  const SUBJECT_ENTRY_ID = "entry.1546281412";
  const MESSAGE_ENTRY_ID = "entry.1871670048";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitted(false);

    const formData = new FormData(event.target);
    const data = {
      [NAME_ENTRY_ID]: formData.get('name'),
      [EMAIL_ENTRY_ID]: formData.get('email'),
      [SUBJECT_ENTRY_ID]: formData.get('subject'),
      [MESSAGE_ENTRY_ID]: formData.get('message'),
    };

    // const encodedData = Object.keys(data)
    //   .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    //   .join("&");

    try {
      const iframe = document.createElement('iframe');
      iframe.name = 'hiddenConfirm';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      event.target.target = 'hiddenConfirm'; 
      event.target.submit(); 

      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        event.target.reset();
        setTimeout(() => {
            if (iframe.parentNode) {
                iframe.parentNode.removeChild(iframe);
            }
        }, 100);
      }, 500); 

    } catch (e) {
      console.error("Error submitting form:", e);
      setError("Sorry, there was an error submitting your message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-20 bg-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-1/3 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-gray-700 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl mt-1 mr-4 flex-shrink-0" />
              <div><h3 className="text-lg font-semibold text-gray-200">Location</h3><p className="text-gray-400 text-sm">California, USA (Open to Remote / WFO)</p></div>
            </div>
            <div className="flex items-start p-4 bg-gray-700 rounded-lg shadow-md">
              <FaEnvelope className="text-indigo-400 text-2xl mt-1 mr-4 flex-shrink-0" />
              <div><h3 className="text-lg font-semibold text-gray-200">Email</h3><a href="mailto:shubhamc@usc.edu" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">shubhamc@usc.edu</a></div>
            </div>
            <div className="flex items-start p-4 bg-gray-700 rounded-lg shadow-md">
                <FaLinkedin className="text-indigo-400 text-2xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">LinkedIn</h3>
                  <a href="https://linkedin.com/in/shubham-ch" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">linkedin.com/in/shubham-ch</a>
                </div>
            </div>
            <div className="flex items-start p-4 bg-gray-700 rounded-lg shadow-md">
                <FaGithub className="text-indigo-400 text-2xl mt-1 mr-4 flex-shrink-0" />
                <div><h3 className="text-lg font-semibold text-gray-200">GitHub</h3><a href="https://github.com/esoteriikos" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">github.com/esoteriikos</a></div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-700/30 border border-green-500 text-green-300 p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action={GOOGLE_FORM_ACTION_URL} 
              method="POST" 
              className="bg-gray-700 p-6 sm:p-8 rounded-lg shadow-lg space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name={NAME_ENTRY_ID} id="name" required className="w-full px-4 py-2 bg-gray-800/80 border border-gray-600 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none placeholder-gray-500 transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name={EMAIL_ENTRY_ID} id="email" required className="w-full px-4 py-2 bg-gray-800/80 border border-gray-600 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none placeholder-gray-500 transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <input type="text" name={SUBJECT_ENTRY_ID} id="subject" className="w-full px-4 py-2 bg-gray-800/80 border border-gray-600 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none placeholder-gray-500 transition-all duration-200" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name={MESSAGE_ENTRY_ID} id="message" rows="4" required className="w-full px-4 py-2 bg-gray-800/80 border border-gray-600 rounded-md text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:outline-none placeholder-gray-500 transition-all duration-200"></textarea>
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default Contact;