import React, { useEffect, useState } from 'react';

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
          }, 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gray-900 flex items-center justify-center transition-all duration-1000 ${
      isComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      <div className="text-center">
        {/* Simple Loading Text */}
        <h2 className="text-3xl font-light text-white mb-8 tracking-wide">
          Loading<span className="animate-pulse">...</span>
        </h2>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-gray-400 text-sm font-light">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;