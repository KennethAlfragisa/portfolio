import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div> */}
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          {/* <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-600">
              Computer Science Student | QA Specialist | Event Coordinator | Gaming Enthusiast
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;