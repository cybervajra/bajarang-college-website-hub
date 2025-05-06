import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from '@/components/Layout';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-college-blue py-20 md:py-28">
        <div className="custom-container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us using the information below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="custom-container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-college-blue/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-college-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Locations</h3>
                <p className="text-gray-600 mb-3">Visit us at our campuses</p>
                <ul className="space-y-2">
                  <li className="font-medium">Deeg Road, Deeg (Raj.)</li>
                  <li className="font-medium">Bharatpur Road, Deeg (Raj.)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-college-red/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-college-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
                <p className="text-gray-600 mb-3">Call us for inquiries</p>
                <ul className="space-y-2">
                  <li className="font-medium">9828726666</li>
                  <li className="font-medium">9929258009</li>
                  <li className="font-medium">9828736666</li>
                  <li className="font-medium">6378881540</li>
                  <li className="font-medium">9352066642</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-college-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-college-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="text-gray-600 mb-3">We're available</p>
                <ul className="space-y-2">
                  <li className="font-medium">Monday - Saturday</li>
                  <li className="font-medium">9:00 AM - 5:00 PM</li>
                  <li className="text-gray-500 mt-2">Closed on Sundays & Public Holidays</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in <span className="text-college-red">Touch</span></h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and one of our representatives will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email address" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject of your inquiry" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message or inquiry" rows={5} required />
                  </div>
                </div>
                <Button type="submit" className="bg-college-red hover:bg-red-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find <span className="text-college-blue">Us</span></h2>
              <div className="rounded-lg overflow-hidden border border-gray-200 h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTY5NzM3Mg&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="College Campus Map" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="custom-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Career in Healthcare?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Applications are now open for the 2024-25 academic session. Don't miss this opportunity 
            to build your future with Shri Bajrang Paramedical College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-college-red hover:bg-red-700">
              <a href="/admissions">Apply Now</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/courses">Explore Courses</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
