
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap size={32} className="text-college-darkblue" />
            <div>
              <h1 className="text-xl font-bold text-college-darkblue">
                <span className="text-college-red">Shri Bajrang</span> Paramedical College
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">A Unique College of Deeg</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-college-red ${
                  location.pathname === link.path ? 'text-college-red' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-college-red hover:bg-college-darkblue text-white">
              Apply Now
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 mt-4 border-t border-gray-200">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block text-base font-medium transition-colors hover:text-college-red ${
                      location.pathname === link.path ? 'text-college-red' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  className="bg-college-red hover:bg-college-darkblue text-white w-full"
                >
                  Apply Now
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
