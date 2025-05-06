
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, GraduationCap } from "lucide-react";
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-college-darkblue py-20 md:py-28">
        <div className="custom-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about Shri Bajrang Paramedical College, the unique college of Deeg.
          </p>
        </div>
      </section>

      {/* About College */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-college-red/20 absolute -top-6 -left-6 w-full h-full rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTY5NzM3Mg&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Medical Students Learning" 
                  className="relative rounded-lg w-full" 
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Welcome to <span className="text-college-red">Shri Bajrang</span> Paramedical College
              </h2>
              <p className="text-gray-700 mb-6">
                Established in 2024, Shri Bajrang Paramedical College is the unique paramedical college in Deeg, 
                Rajasthan. Our institution is committed to providing quality education in the field of paramedical 
                sciences, preparing students for successful careers in the healthcare industry.
              </p>
              <p className="text-gray-700 mb-6">
                With state-of-the-art facilities and experienced faculty, we offer comprehensive diploma programs 
                that combine theoretical knowledge with practical training to ensure our graduates are well-equipped 
                to meet the demands of the healthcare sector.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="text-college-blue h-5 w-5" />
                  <span>Experienced Faculty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-college-blue h-5 w-5" />
                  <span>Quality Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-college-blue h-5 w-5" />
                  <span>Government Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-college-blue h-5 w-5" />
                  <span>Career Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="custom-container">
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="overflow-hidden">
              <div className="h-2 bg-college-blue"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-4">
                  To provide quality paramedical education that prepares students for successful careers in healthcare, 
                  equipping them with the skills, knowledge, and values necessary to meet the healthcare needs of society.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Deliver comprehensive, career-focused education</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Foster academic excellence and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Develop skilled healthcare professionals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-2 bg-college-red"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-college-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  To be recognized as a premier institution for paramedical education in Rajasthan, known for 
                  academic excellence, innovation, and producing highly skilled healthcare professionals who contribute 
                  positively to the healthcare system.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Become a center of excellence in paramedical education</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Empower students with cutting-edge knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contribute to healthcare advancement in the region</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-college-red">Us</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shri Bajrang Paramedical College offers several advantages that set us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-blue/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-college-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced professionals with extensive knowledge and practical experience in the healthcare field.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-red/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-college-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">Government Approved</h3>
              <p className="text-gray-600">
                Our courses and fee structure are approved by the government, ensuring quality education at affordable rates.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-yellow/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-college-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Our curriculum combines theoretical knowledge with practical training to ensure well-rounded education.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-blue/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-college-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Facilities</h3>
              <p className="text-gray-600">
                Access to modern laboratories and equipment to gain practical experience with the latest technology.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-red/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-college-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Guidance and support for career development and placement opportunities after course completion.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-college-yellow/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-college-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scholarship Opportunities</h3>
              <p className="text-gray-600">
                Eligible students can avail scholarships as per government regulations to support their education.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
