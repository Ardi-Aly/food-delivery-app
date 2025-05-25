import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { CartItem, CartScreenProps } from '../types';

const CartScreen: React.FC<CartScreenProps> = ({ cartItems, onGoBack, onCheckout, onUpdateQuantity }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 lg:px-6 py-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center">
          <button onClick={onGoBack} className="mr-4 hover:bg-gray-100 p-2 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Your Cart</h2>
        </div>
      </div>
    </div>

    {/* Cart Items */}
    <div className="px-4 lg:px-6 py-6">
      <div className="max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <button 
              onClick={onGoBack}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 border rounded hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 border rounded hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-red-500">
                      ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 2.99).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  </div>
);

export default CartScreen;
