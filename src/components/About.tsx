import React from 'react';
import { GraduationCap, Building, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I am a curious, disciplined, and impact-driven engineer passionate about bridging development with scalable automation. I believe in solving real-world problems through intelligent design, resilient systems, and clean code.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Statement */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Career Objective</h3>
              <p className="text-gray-300 leading-relaxed">
                To secure a challenging role in DevOps, Cloud, or Machine Learning where I can leverage my skills in automation pipelines, distributed systems, and AI to build solutions that scale and serve with efficiency.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Statement</h3>
              <p className="text-gray-300 leading-relaxed">
                I am a curious, disciplined, and impact-driven engineer passionate about bridging development with scalable automation. I believe in solving real-world problems through intelligent design, resilient systems, and clean code.
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Education & Experience</h3>
            
            <div className="space-y-6">
              {/* Current Internship */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Building className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">DevOps Intern</h4>
                    <p className="text-blue-400 font-medium mb-2">LinuxWorld Pvt. Ltd.</p>
                    <p className="text-gray-300 text-sm mb-3">45-day DevOps Internship</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Current</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* B.Tech */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">B.Tech Computer Science & Engineering</h4>
                    <p className="text-teal-400 font-medium mb-2">VIT Jaipur</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - 2026</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Jaipur, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 12th Grade */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">12th Grade (PCM)</h4>
                    <p className="text-purple-400 font-medium mb-2">CCL DAV Public School</p>
                    <p className="text-gray-300 text-sm mb-3">89% - Physics, Chemistry, Mathematics</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2020 - 2022</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Giridih, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;