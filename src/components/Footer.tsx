
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, MapPin, Mail, Calendar, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-college-darkblue text-white pt-12 pb-6">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={24} />
              <h2 className="text-xl font-bold">Shri Bajrang</h2>
            </div>
            <p className="mb-4 text-gray-300">
              Providing quality paramedical education since 2024, establishing standards 
              of academic excellence and healthcare training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-college-red transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-college-red transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-college-red transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-college-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-college-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-college-red transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-college-red transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-college-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <BookOpen size={16} />
                <Link to="/courses" className="text-gray-300 hover:text-college-red transition-colors">
                  DMLT - Diploma in Medical Laboratory Technology
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <BookOpen size={16} />
                <Link to="/courses" className="text-gray-300 hover:text-college-red transition-colors">
                  DOTT - Diploma in Operation Theatre Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Deeg Road, Deeg (Raj.)</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bharatpur Road, Deeg (Raj.)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">9828726666, 9929258009</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-gray-300">9828736666, 6378881540</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shri Bajrang Paramedical College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
