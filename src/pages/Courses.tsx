
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";
import Layout from '@/components/Layout';

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-college-blue py-20 md:py-28">
        <div className="custom-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our comprehensive paramedical courses designed to prepare you for a successful career in healthcare.
          </p>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="dmlt" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="dmlt" className="text-lg py-3">DMLT</TabsTrigger>
                <TabsTrigger value="dott" className="text-lg py-3">DOTT</TabsTrigger>
              </TabsList>

              <TabsContent value="dmlt">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                      <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="DMLT Student in Laboratory"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4">Diploma in Medical Laboratory Technology (DMLT)</h2>
                        <p className="text-gray-700 mb-6">
                          The Diploma in Medical Laboratory Technology (DMLT) is a 2-year program that prepares students for careers 
                          as medical laboratory technicians. Students learn to perform laboratory tests, handle sophisticated equipment, 
                          and assist in diagnosing diseases.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-start">
                            <div className="bg-college-blue/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Duration</h4>
                              <p>2 Years</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-blue/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Eligibility</h4>
                              <p>12th Pass (Math, Bio)</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-blue/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Sessions</h4>
                              <p>2024-25</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-blue/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Fees</h4>
                              <p>As per govt. norms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
                    <div className="mb-8">
                      <h4 className="font-bold mb-2 text-lg">First Year</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Introduction to Medical Laboratory Technology</li>
                        <li>Anatomy and Physiology</li>
                        <li>Biochemistry and Clinical Pathology</li>
                        <li>Microbiology</li>
                        <li>Hematology and Blood Banking</li>
                        <li>Laboratory Management and Ethics</li>
                      </ul>

                      <h4 className="font-bold mb-2 text-lg">Second Year</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Advanced Hematology</li>
                        <li>Clinical Biochemistry</li>
                        <li>Medical Microbiology</li>
                        <li>Histopathology and Cytopathology</li>
                        <li>Laboratory Instrumentation</li>
                        <li>Practical Training and Internship</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                      <li>Medical Laboratories</li>
                      <li>Hospitals</li>
                      <li>Blood Banks</li>
                      <li>Diagnostic Centers</li>
                      <li>Research Institutes</li>
                      <li>Pharmaceutical Companies</li>
                    </ul>

                    <div className="flex justify-center">
                      <Button asChild size="lg" className="bg-college-red hover:bg-red-700">
                        <Link to="/admissions">Apply for DMLT</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dott">
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                      <div className="md:w-1/3">
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1587425557435-7b2d3f53e61d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                            alt="DOTT Student in Operating Theatre"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4">Diploma in Operation Theatre Technology (DOTT)</h2>
                        <p className="text-gray-700 mb-6">
                          The Diploma in Operation Theatre Technology (DOTT) is a 2-year program designed to train students in the 
                          technical aspects of operating room procedures. Students learn to assist surgeons, handle surgical equipment, 
                          and maintain a sterile environment.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-start">
                            <div className="bg-college-yellow/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Duration</h4>
                              <p>2 Years</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-yellow/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Eligibility</h4>
                              <p>12th Pass (Math, Bio)</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-yellow/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Sessions</h4>
                              <p>2024-25</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="bg-college-yellow/10 p-2 rounded mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-bold">Fees</h4>
                              <p>As per govt. norms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
                    <div className="mb-8">
                      <h4 className="font-bold mb-2 text-lg">First Year</h4>
                      <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Introduction to Operation Theatre Technology</li>
                        <li>Anatomy and Physiology</li>
                        <li>Sterilization Techniques</li>
                        <li>Surgical Instruments and Equipment</li>
                        <li>Anesthesia and Medication</li>
                        <li>Patient Care and Safety</li>
                      </ul>

                      <h4 className="font-bold mb-2 text-lg">Second Year</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Advanced Surgical Procedures</li>
                        <li>Emergency and Trauma Management</li>
                        <li>Specialized Surgery Assistance</li>
                        <li>Operation Theatre Management</li>
                        <li>Biomedical Waste Management</li>
                        <li>Clinical Training and Internship</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                      <li>Hospitals</li>
                      <li>Surgical Centers</li>
                      <li>Emergency Departments</li>
                      <li>Trauma Centers</li>
                      <li>Organ Transplant Units</li>
                      <li>Medical Device Companies</li>
                    </ul>

                    <div className="flex justify-center">
                      <Button asChild size="lg" className="bg-college-red hover:bg-red-700">
                        <Link to="/admissions">Apply for DOTT</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
