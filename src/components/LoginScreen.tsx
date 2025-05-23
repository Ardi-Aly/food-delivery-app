import React from 'react';

interface LoginScreenProps {
  isAnimating: boolean;
  onLogin: () => void;
  onSignUp: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ isAnimating, onLogin, onSignUp }) => (
  <div className={`min-h-screen bg-white flex flex-col transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
    <div className="flex-1 flex flex-col justify-center px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <input
            type="email"
            placeholder="Email Id"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-red-500 text-sm">Forgot Password?</a>
        </div>
      </div>

      <button 
        onClick={onLogin}
        className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors mb-6"
      >
        Login
      </button>

      <div className="text-center">
        <p className="text-gray-600 mb-4">Or continue with</p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="text-xl">G</span>
          </button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="text-xl">f</span>
          </button>
        </div>
        <p className="text-gray-600">
          Don't have an account? 
          <button className="text-red-500 ml-1" onClick={onSignUp}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default LoginScreen;
