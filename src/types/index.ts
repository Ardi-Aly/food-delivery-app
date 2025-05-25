export type Theme = 'light' | 'dark';

export interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  category: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface HomeScreenProps {
  foodItems: FoodItem[];
  cartCount: number;
  onAddToCart: (item: FoodItem) => void;
  onCartClick: () => void;
  theme: Theme;
  onThemeToggle: () => void;
}

export interface SplashScreenProps {
  isAnimating: boolean;
  onGetStarted: () => void;
}

export interface LoginScreenProps {
  isAnimating: boolean;
  onLogin: () => void;
  onSignUp: () => void;
}

export interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: number, delta: number) => void;
  onGoBack: () => void;
  onCheckout: () => void;
}

export interface CheckoutScreenProps {
  cartItems: CartItem[];
  onGoBack: () => void;
  onComplete: () => void;
}

export interface TrackingScreenProps {
  onBackToHome: () => void;
}
