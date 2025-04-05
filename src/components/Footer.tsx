
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-8 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
            <p className="mt-2 text-gray-500 text-sm max-w-md">
              Professional OSHA compliance solutions to help businesses maintain safety standards and protect their workforce.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link to="/legal" className="text-primary-700 hover:text-primary-800 font-medium">
              Terms of Service
            </Link>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} OSHAQuick. Not affiliated with OSHA.
          </p>
          <p className="text-gray-400 text-xs mt-2 md:mt-0">
            OSHAQuick is a private entity providing compliance resources. Not a government agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
