import React, { useState } from 'react';
import { FoodItem } from './types';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import CheckoutScreen from './components/CheckoutScreen';
import TrackingScreen from './components/TrackingScreen';

const FoodDeliveryApp = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isAnimating, setIsAnimating] = useState(false);
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const changeScreen = (screen: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsAnimating(false);
    }, 500);
  };

  // Sample food data
  const foodItems = [
    {
      id: 1,
      name: "Beef Burger",
      image: "/images/burger.jpg",
      price: 12.99,
      rating: 4.8,
      description: "Juicy beef patty with fresh vegetables",
      category: "Burger"
    },
    {
      id: 2,
      name: "Chicken Wings",
      image: "/images/chiken.jpg",
      price: 8.99,
      rating: 4.6,
      description: "Crispy chicken wings with special sauce",
      category: "Chicken"
    },
    {
      id: 3,
      name: "Pizza Margherita",
      image: "/images/pizza.jpg",
      price: 15.99,
      rating: 4.9,
      description: "Classic pizza with tomato and mozzarella",
      category: "Pizza"
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      image: "/images/passta.jpg",
      price: 11.99,
      rating: 4.7,
      description: "Creamy pasta with bacon and parmesan",
      category: "Pasta"
    }
  ];

  const addToCart = (item: FoodItem) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  // Screen Router
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen 
          isAnimating={isAnimating} 
          onGetStarted={() => changeScreen('login')} 
        />;
      case 'login':
        return <LoginScreen 
          isAnimating={isAnimating}
          onLogin={() => changeScreen('home')}
          onSignUp={() => changeScreen('signup')}
        />;
      case 'home':
        return <HomeScreen 
          foodItems={foodItems}
          cartCount={cartCount}
          onAddToCart={addToCart}
          onCartClick={() => changeScreen('cart')}
        />;
      case 'cart':
        return <CartScreen 
          cartItems={cartItems}
          onBackToHome={() => changeScreen('home')}
          onCheckout={() => changeScreen('checkout')}
        />;
      case 'checkout':
        return <CheckoutScreen 
          cartItems={cartItems}
          onBackToCart={() => changeScreen('cart')}
          onPlaceOrder={() => changeScreen('tracking')}
        />;
      case 'tracking':
        return <TrackingScreen 
          onBackToHome={() => changeScreen('home')}
        />;
      default:
        return <SplashScreen 
          isAnimating={isAnimating} 
          onGetStarted={() => changeScreen('login')} 
        />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl min-h-screen lg:min-h-[calc(100vh-2rem)] lg:my-4 lg:rounded-xl">
      {renderScreen()}
    </div>
  );
};

export default FoodDeliveryApp;