
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600 max-w-md">
              OSHAQuick provides secure, professional OSHA compliance solutions to help businesses maintain safety standards and protect their workforce.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-700">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-600 hover:text-primary-700">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/.well-known/security.txt" className="text-gray-600 hover:text-primary-700">
                  Security.txt
                </Link>
              </li>
              <li>
                <Link to="/sitemap.xml" className="text-gray-600 hover:text-primary-700">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} OSHAQuick. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/legal" className="text-gray-500 hover:text-primary-700 text-sm">
              Privacy Policy
            </Link>
            <Link to="/legal" className="text-gray-500 hover:text-primary-700 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
