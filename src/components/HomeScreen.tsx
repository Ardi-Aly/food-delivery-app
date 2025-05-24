import React from 'react';
import { Heart, Search, ShoppingCart, Star, MapPin, Clock, User, Home, Plus } from 'lucide-react';
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
    <div className="bg-gradient-to-r from-red-500 to-orange-400 px-4 lg:px-6 py-6 shadow-sm sticky top-0 z-50 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-white mr-2" />
            <div>
              <p className="text-sm">Deliver to</p>
              <p className="font-semibold">Home - 123 Street</p>
            </div>
          </div>
          <div className="relative">
            <button onClick={onCartClick} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-300" />
          <input
            type="text"
            placeholder="What do you want to eat today?"
            className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-sm"
          />
        </div>
      </div>
    </div>

    {/* Promo Banner */}
    <div className="px-4 lg:px-6 py-4 bg-white">
      <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 p-4 flex items-center justify-between shadow-sm">
        <div>
          <h4 className="text-lg font-semibold text-orange-800">🔥 Special Deal Today!</h4>
          <p className="text-sm text-orange-600">Get 20% off on all pizzas until 6 PM</p>
        </div>
        <img src="/images/pizza.jpg" alt="Promo" className="w-16 h-16 rounded-full object-cover" />
      </div>
    </div>

    {/* Category Section */}
    <div className="px-4 lg:px-6 py-6 bg-white mb-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { name: '🍔 Burger' },
            { name: '🍕 Pizza' },
            { name: '🍗 Chicken' },
            { name: '🍝 Pasta' },
          ].map((cat) => (
            <button
              key={cat.name}
              className="flex-shrink-0 px-6 py-2 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600 transition-colors"
            >
              {cat.name}
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
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow hover:scale-[1.02] duration-200"
            >
              <div className="text-center">
                <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-md mb-3" />
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
        <button className="flex flex-col items-center py-2 text-red-500">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-400">
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button onClick={onCartClick} className="flex flex-col items-center py-2 text-gray-400">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button className="flex flex-col items-center py-2 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  </div>
);

export default HomeScreen;
