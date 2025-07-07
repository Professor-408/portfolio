import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message. Please try again later.');
      });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">mayankraj8953@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <Phone className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+91-6202730341</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Jaipur, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Professor-408" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/mayank-raj-4a137a260/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;