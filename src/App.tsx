import React, { useState, useEffect } from 'react';
import { FoodItem, CartItem } from './types';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import CheckoutScreen from './components/CheckoutScreen';
import TrackingScreen from './components/TrackingScreen';

const FoodDeliveryApp = () => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [isAnimating, setIsAnimating] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

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
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (itemId: number, delta: number) => {
    setCartItems(prevItems => {
      return prevItems.reduce((acc: CartItem[], item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) {
            return acc; // Remove item if quantity becomes 0 or negative
          }
          return [...acc, { ...item, quantity: newQuantity }];
        }
        return [...acc, item];
      }, []);
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
          onSignUp={() => changeScreen('home')}
        />;
      case 'home':
        return <HomeScreen 
          foodItems={foodItems}
          cartCount={cartCount}
          onAddToCart={addToCart}
          onCartClick={() => changeScreen('cart')}
          theme={theme}
          onThemeToggle={toggleTheme}
        />;
      case 'cart':
        return <CartScreen 
          cartItems={cartItems}
          onUpdateQuantity={updateCartItemQuantity}
          onGoBack={() => changeScreen('home')}
          onCheckout={() => changeScreen('checkout')}
        />;
      case 'checkout':
        return <CheckoutScreen 
          cartItems={cartItems}
          onGoBack={() => changeScreen('cart')}
          onComplete={() => changeScreen('tracking')}
        />;
      case 'tracking':
        return <TrackingScreen 
          onBackToHome={() => changeScreen('home')}
        />;
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {renderScreen()}
    </div>
  );
};

export default FoodDeliveryApp;