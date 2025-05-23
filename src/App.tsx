import React, { useState } from 'react';
import { Heart, Search, ShoppingCart, Star, MapPin, Clock, User, Home, Menu, Plus, Minus } from 'lucide-react';

const FoodDeliveryApp = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Sample food data
  const foodItems = [
    {
      id: 1,
      name: "Beef Burger",
      image: "🍔",
      price: 12.99,
      rating: 4.8,
      description: "Juicy beef patty with fresh vegetables",
      category: "Burger"
    },
    {
      id: 2,
      name: "Chicken Wings",
      image: "🍗",
      price: 8.99,
      rating: 4.6,
      description: "Crispy chicken wings with special sauce",
      category: "Chicken"
    },
    {
      id: 3,
      name: "Pizza Margherita",
      image: "🍕",
      price: 15.99,
      rating: 4.9,
      description: "Classic pizza with tomato and mozzarella",
      category: "Pizza"
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      image: "🍝",
      price: 11.99,
      rating: 4.7,
      description: "Creamy pasta with bacon and parmesan",
      category: "Pasta"
    }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  const SplashScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🍔</div>
        <div className="absolute top-40 right-20 text-4xl">🍕</div>
        <div className="absolute bottom-40 left-20 text-5xl">🍗</div>
        <div className="absolute bottom-20 right-10 text-3xl">🍟</div>
      </div>
      
      <div className="text-center z-10">
        <div className="text-8xl mb-8">🛵</div>
        <h1 className="text-4xl font-bold mb-4">SPICY MEAL</h1>
        <p className="text-lg mb-8 opacity-90">Fast Food Delivery Service</p>
        <p className="text-sm mb-12 opacity-80 max-w-xs">Delicious food delivered to your doorstep in minutes</p>
        
        <button 
          onClick={() => setCurrentScreen('login')}
          className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );

  const LoginScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
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
          onClick={() => setCurrentScreen('home')}
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
            <button className="text-red-500 ml-1" onClick={() => setCurrentScreen('signup')}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const SignUpScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
          <p className="text-gray-600">Sign up to get started</p>
        </div>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Email Id"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Create password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>

        <button 
          onClick={() => setCurrentScreen('home')}
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors mb-6"
        >
          Create Account
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
            Already have an account? 
            <button className="text-red-500 ml-1" onClick={() => setCurrentScreen('login')}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-red-500 mr-2" />
            <div>
              <p className="text-sm text-gray-600">Deliver to</p>
              <p className="font-semibold">Home - 123 Street</p>
            </div>
          </div>
          <div className="relative">
            <button onClick={() => setCurrentScreen('cart')} className="p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to eat today?"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:bg-white focus:shadow-md"
          />
        </div>
      </div>

      {/* Question Section */}
      <div className="px-4 py-6 bg-white mb-4">
        <h3 className="text-lg font-semibold mb-4">What do you want to eat today?</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {['Burger', 'Pizza', 'Chicken', 'Pasta'].map((category) => (
            <button key={category} className="flex-shrink-0 px-4 py-2 bg-red-500 text-white rounded-full text-sm">
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Items */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Popular Items</h3>
        <div className="grid grid-cols-2 gap-4">
          {foodItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="text-center">
                <div className="text-4xl mb-2">{item.image}</div>
                <h4 className="font-semibold mb-1">{item.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-500">${item.price}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center py-2">
            <Home className="w-6 h-6 text-red-500" />
            <span className="text-xs text-red-500 mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center py-2">
            <Search className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-400 mt-1">Search</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('cart')}
            className="flex flex-col items-center py-2"
          >
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

  const CartScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => setCurrentScreen('home')} className="mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Your Cart</h2>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-4 py-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <button 
              onClick={() => setCurrentScreen('home')}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{item.image}</div>
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="p-1 border rounded">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="mx-3">1</span>
                      <button className="p-1 border rounded">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(cartItems.reduce((total, item) => total + item.price, 0) + 2.99).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen('checkout')}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );

  const CheckoutScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => setCurrentScreen('cart')} className="mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Checkout</h2>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-semibold mb-2">Delivery Address</h3>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-red-500 mr-2" />
            <div>
              <p className="font-medium">Home</p>
              <p className="text-gray-600">123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-3" defaultChecked />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-3" />
              <span>Credit Card</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Items ({cartItems.length})</span>
              <span>${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-red-500">${(cartItems.reduce((total, item) => total + item.price, 0) + 2.99).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setCurrentScreen('tracking')}
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );

  const TrackingScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => setCurrentScreen('home')} className="mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold">Order Tracking</h2>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Map Placeholder */}
        <div className="bg-green-100 rounded-lg h-64 mb-6 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <p className="text-green-800 font-semibold">Order is on the way!</p>
            <p className="text-green-600">Estimated arrival: 25 min</p>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-semibold mb-4">Order Status</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
              <div>
                <p className="font-medium">Order Confirmed</p>
                <p className="text-sm text-gray-600">Your order has been confirmed</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
              <div>
                <p className="font-medium">Preparing</p>
                <p className="text-sm text-gray-600">Restaurant is preparing your food</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
              <div>
                <p className="font-medium">On the way</p>
                <p className="text-sm text-gray-600">Driver is heading to your location</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-medium text-gray-400">Delivered</p>
                <p className="text-sm text-gray-400">Food delivered to your doorstep</p>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold mb-4">Your Delivery Partner</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.8</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 bg-green-500 text-white rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-500 text-white rounded-full">
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
  );

  // Screen Router
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'login':
        return <LoginScreen />;
      case 'signup':
        return <SignUpScreen />;
      case 'home':
        return <HomeScreen />;
      case 'cart':
        return <CartScreen />;
      case 'checkout':
        return <CheckoutScreen />;
      case 'tracking':
        return <TrackingScreen />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl min-h-screen">
      {renderScreen()}
    </div>
  );
};

export default FoodDeliveryApp;