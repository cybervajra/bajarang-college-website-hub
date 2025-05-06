
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, Users, School } from "lucide-react";
import Layout from '@/components/Layout';

const Index = () => {
  const currentYear = new Date().getFullYear();
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-college-blue" />,
      title: "Quality Education",
      description: "State-approved curriculum with experienced faculty providing quality paramedical education."
    },
    {
      icon: <Users className="h-10 w-10 text-college-blue" />,
      title: "Career Opportunities",
      description: "Open doors to numerous career opportunities in the growing healthcare sector."
    },
    {
      icon: <School className="h-10 w-10 text-college-blue" />,
      title: "Scholarship Available",
      description: "Eligible students can avail scholarships as per government regulations."
    },
    {
      icon: <Calendar className="h-10 w-10 text-college-blue" />,
      title: "2-Year Programs",
      description: "Comprehensive 2-year diploma programs with practical training."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-college-darkblue to-college-blue overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="custom-container relative z-10 flex flex-col lg:flex-row items-center justify-between py-20 md:py-32">
          <div className="text-white w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              Shri Bajrang <span className="text-college-yellow">Paramedical College</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100 max-w-xl mx-auto lg:mx-0">
              A unique college of Deeg offering quality paramedical education where education meets innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" asChild className="bg-college-red hover:bg-red-700 text-white">
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-college-darkblue">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg inline-block">
              <p className="font-semibold">Admissions Open for {currentYear}-{currentYear+1}</p>
              <p className="text-sm">Last Date: 27 August {currentYear}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTY5NzM3Mg&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Medical Education"
                className="rounded-full border-4 border-white shadow-lg"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gray-50">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-college-red">Courses</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Build your career in the medical field with our comprehensive diploma programs designed for 12th pass students (Math, Bio).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* DMLT Course */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-2 bg-college-red"></div>
              <CardContent className="p-6">
                <div className="rounded-full bg-college-red/10 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-college-red" />
                </div>
                <h3 className="text-2xl font-bold mb-2">DMLT</h3>
                <h4 className="text-lg text-gray-700 mb-4">Diploma in Medical Laboratory Technology</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eligibility: 12th Pass (Math, Bio)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Duration: 2 Years
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Government approved fees
                  </li>
                </ul>
                <Button asChild className="w-full bg-college-blue hover:bg-college-darkblue text-white">
                  <Link to="/courses">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            {/* DOTT Course */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-2 bg-college-yellow"></div>
              <CardContent className="p-6">
                <div className="rounded-full bg-college-yellow/10 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-college-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-2">DOTT</h3>
                <h4 className="text-lg text-gray-700 mb-4">Diploma in Operation Theatre Technology</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Eligibility: 12th Pass (Math, Bio)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Duration: 2 Years
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Government approved fees
                  </li>
                </ul>
                <Button asChild className="w-full bg-college-blue hover:bg-college-darkblue text-white">
                  <Link to="/courses">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-college-red">Us</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shri Bajrang Paramedical College offers a unique educational experience with numerous benefits for students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-college-maroon text-white">
        <div className="custom-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Medical Career Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Applications are open from 12.08.{currentYear} to 27.08.{currentYear}. Don't miss this opportunity to build your future in healthcare.
          </p>
          <Button asChild size="lg" className="bg-white text-college-darkblue hover:bg-gray-100">
            <Link to="/admissions">Apply Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
