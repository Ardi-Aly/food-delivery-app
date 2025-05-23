import React from 'react';
import { Heart, Search, ShoppingCart, Star, MapPin, Clock, User, Home, Menu, Plus } from 'lucide-react';
import { FoodItem } from '../types';

interface HomeScreenProps {
  foodItems: FoodItem[];
  cartCount: number;
  onAddToCart: (item: FoodItem) => void;
  onCartClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ foodItems, cartCount, onAddToCart, onCartClick }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <div className="bg-white px-4 lg:px-6 py-6 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-red-500 mr-2" />
            <div>
              <p className="text-sm text-gray-600">Deliver to</p>
              <p className="font-semibold">Home - 123 Street</p>
            </div>
          </div>
          <div className="relative">
            <button onClick={onCartClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to eat today?"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 transition-all"
          />
        </div>
      </div>
    </div>

    {/* Category Section */}
    <div className="px-4 lg:px-6 py-6 bg-white mb-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">What do you want to eat today?</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Burger', 'Pizza', 'Chicken', 'Pasta'].map((category) => (
            <button key={category} className="flex-shrink-0 px-6 py-2 bg-red-500 text-white rounded-full text-sm hover:bg-red-600 transition-colors">
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Featured Items */}
    <div className="px-4 lg:px-6 mb-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-2">{item.image}</div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-500">${item.price}</span>
                  <button 
                    onClick={() => onAddToCart(item)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Navigation */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
      <div className="flex justify-around max-w-4xl mx-auto">
        <button className="flex flex-col items-center py-2">
          <Home className="w-6 h-6 text-red-500" />
          <span className="text-xs text-red-500 mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center py-2">
          <Search className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Search</span>
        </button>
        <button onClick={onCartClick} className="flex flex-col items-center py-2">
          <ShoppingCart className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Cart</span>
        </button>
        <button className="flex flex-col items-center py-2">
          <User className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Profile</span>
        </button>
      </div>
    </div>
  </div>
);

export default HomeScreen;
