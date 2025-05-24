import React from 'react';
import { MapPin, Star, User } from 'lucide-react';

interface TrackingScreenProps {
  onBackToHome: () => void;
}

const TrackingScreen: React.FC<TrackingScreenProps> = ({ onBackToHome }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 lg:px-6 py-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center">
          <button onClick={onBackToHome} className="mr-4 hover:bg-gray-100 p-2 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Order Tracking</h2>
        </div>
      </div>
    </div>

    <div className="px-4 lg:px-6 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg h-64 md:h-80 mb-6 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <p className="text-green-800 font-semibold mb-1">Order is on the way!</p>
            <p className="text-green-600">Estimated arrival: 25 min</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Order Status */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Order Status</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="font-medium mb-1">Order Confirmed</p>
                  <p className="text-sm text-gray-600">Your order has been confirmed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="font-medium mb-1">Preparing</p>
                  <p className="text-sm text-gray-600">Restaurant is preparing your food</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="font-medium mb-1">On the way</p>
                  <p className="text-sm text-gray-600">Driver is heading to your location</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-4 h-4 bg-gray-300 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-gray-400 mb-1">Delivered</p>
                  <p className="text-sm text-gray-400">Food delivered to your doorstep</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Info */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold mb-6">Your Delivery Partner</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full mr-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium mb-1">John Doe</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </button>
                <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TrackingScreen;
