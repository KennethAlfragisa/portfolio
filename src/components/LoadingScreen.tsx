import React, { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-opacity duration-500 ${
      isComplete ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Code size={32} className="text-white" />
            </div>
            <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          Loading Portfolio
        </h2>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Text */}
        <p className="text-gray-400 text-sm">
          {Math.round(progress)}%
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;