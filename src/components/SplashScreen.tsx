import React from 'react';

interface SplashScreenProps {
  isAnimating: boolean;
  onGetStarted: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isAnimating, onGetStarted }) => (
  <div className={`min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex flex-col items-center justify-center text-white relative overflow-hidden transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-20 left-10 text-6xl">🍔</div>
      <div className="absolute top-40 right-20 text-4xl">🍕</div>
      <div className="absolute bottom-40 left-20 text-5xl">🍗</div>
      <div className="absolute bottom-20 right-10 text-3xl">🍟</div>
    </div>
    
    <div className="text-center z-10">
      <div className="text-8xl mb-8 animate-bounce">🛵</div>
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">SPICY MEAL</h1>
      <p className="text-lg mb-8 opacity-90 animate-fade-in-delay">Fast Food Delivery Service</p>
      <p className="text-sm mb-12 opacity-80 max-w-xs animate-fade-in-delay-2">Delicious food delivered to your doorstep in minutes</p>
      
      <button 
        onClick={onGetStarted}
        className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fade-in-delay-3"
      >
        Get Started
      </button>
    </div>
  </div>
);

export default SplashScreen;
