import React from 'react';
import { Mail, Lock } from 'lucide-react';

interface LoginScreenProps {
  isAnimating: boolean;
  onLogin: () => void;
  onSignUp: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ isAnimating, onLogin, onSignUp }) => (
  <div
    className={`min-h-screen flex flex-col lg:flex-row transition-opacity duration-500 ${
      isAnimating ? 'opacity-0' : 'opacity-100'
    }`}
  >
    {/* Left Illustration */}
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tr from-red-400 to-red-600 text-white justify-center items-center p-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FoodExpress 🍽️</h1>
        <p className="text-lg">Delivering your cravings fast and hot!</p>
        <img
          src="/images/login-illustration.png"
          alt="Login Illustration"
          className="mt-8 w-80 mx-auto drop-shadow-xl"
        />
      </div>
    </div>

    {/* Right Login Form */}
    <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back 👋</h2>
        <p className="text-gray-500">Please enter your credentials to continue</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
        </div>
      </div>

      <button
        onClick={onLogin}
        className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md"
      >
        Sign In
      </button>

      <div className="text-center mt-6">
        <p className="text-gray-600 mb-3">Or continue with</p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="text-xl">G</span>
          </button>
          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="text-xl">f</span>
          </button>
        </div>
        <p className="text-gray-600">
          Don’t have an account?
          <button className="text-red-500 ml-1 hover:underline" onClick={onSignUp}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default LoginScreen;
