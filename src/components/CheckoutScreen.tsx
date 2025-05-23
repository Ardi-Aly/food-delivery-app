import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { FoodItem } from '../types';

interface CheckoutScreenProps {
  cartItems: FoodItem[];
  onBackToCart: () => void;
  onPlaceOrder: () => void;
}

const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ cartItems, onBackToCart, onPlaceOrder }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 lg:px-6 py-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center">
          <button onClick={onBackToCart} className="mr-4 hover:bg-gray-100 p-2 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Checkout</h2>
        </div>
      </div>
    </div>

    <div className="px-4 lg:px-6 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Delivery Address</h3>
            <button className="text-red-500 text-sm hover:text-red-600">Change</button>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium mb-1">Home</p>
              <p className="text-gray-600 text-sm">123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment" className="w-4 h-4 text-red-500" defaultChecked />
              <span className="ml-3">Cash on Delivery</span>
            </label>
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="payment" className="w-4 h-4 text-red-500" />
              <span className="ml-3">Credit Card</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Items ({cartItems.length})</span>
              <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-red-500">
                  ${(cartItems.reduce((total, item) => total + item.price, 0) + 2.99).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={onPlaceOrder}
          className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
);

export default CheckoutScreen;
