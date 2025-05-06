
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "lucide-react";
import Layout from '@/components/Layout';

const Admissions = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-college-red py-20 md:py-28">
        <div className="custom-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Begin your journey towards a rewarding career in healthcare with Shri Bajrang Paramedical College.
          </p>
          <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm p-4 rounded-lg">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="h-6 w-6" />
              <span className="text-lg font-semibold">Applications Open: 12 Aug - 27 Aug {currentYear}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission <span className="text-college-red">Process</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to apply for admission to our diploma programs in DMLT and DOTT.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="transition-transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-college-blue/10 text-college-blue flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Check Eligibility</h3>
                <p className="text-gray-600">
                  Ensure you meet the eligibility criteria of 12th pass with Math or Biology.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-college-blue/10 text-college-blue flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Fill Application</h3>
                <p className="text-gray-600">
                  Complete the application form with accurate personal and academic details.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-college-blue/10 text-college-blue flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Submit Documents</h3>
                <p className="text-gray-600">
                  Provide all required documents including academic certificates.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-college-blue/10 text-college-blue flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Pay Fees</h3>
                <p className="text-gray-600">
                  Complete the admission process by paying the government-approved fees.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-center">Required Documents</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Completed application form</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10th mark sheet and certificate</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12th mark sheet and certificate</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Transfer Certificate (TC) from last attended institution</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Character Certificate</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Recent passport size photographs (4 copies)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Government ID proof (Aadhar Card/Voter ID)</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-college-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Caste Certificate (if applicable)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-16 bg-gray-50">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key <span className="text-college-red">Dates</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mark these important dates for the {currentYear}-{currentYear+1} admission cycle.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center text-xl mb-4">Academic Session {currentYear}-{currentYear+1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Application Start Date</span>
                    <span className="bg-college-blue/10 text-college-blue px-3 py-1 rounded">12 August {currentYear}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Application End Date</span>
                    <span className="bg-college-red/10 text-college-red px-3 py-1 rounded">27 August {currentYear}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Document Verification</span>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">August-September {currentYear}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Course Commencement</span>
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded">September {currentYear}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" className="bg-college-red hover:bg-red-700">
                Download Application Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-college-red">Questions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our admission process and courses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What are the eligibility criteria for admission?
                </AccordionTrigger>
                <AccordionContent>
                  Students must have completed 12th standard (Higher Secondary) with Mathematics or Biology subjects. Both Science and Math stream students are eligible to apply.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What is the fee structure for the courses?
                </AccordionTrigger>
                <AccordionContent>
                  The fee is determined as per government regulations. Detailed fee structure will be provided at the time of admission. Scholarships are available for eligible students as per government norms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is there any entrance examination for admission?
                </AccordionTrigger>
                <AccordionContent>
                  No, there is no entrance examination. Admissions are based on merit in the qualifying examination (12th standard) and availability of seats.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What are the career prospects after completing the courses?
                </AccordionTrigger>
                <AccordionContent>
                  Graduates of our programs have excellent job opportunities in hospitals, diagnostic centers, laboratories, research institutions, and pharmaceutical companies. The healthcare sector has a growing demand for skilled paramedical professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Are there any hostel facilities available?
                </AccordionTrigger>
                <AccordionContent>
                  Please contact the college administration for information regarding hostel facilities and accommodation options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Can I apply for both DMLT and DOTT courses?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can apply for both courses, but you will need to indicate your preference. Final admission will be granted to one course based on merit and availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
