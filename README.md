# Exspres Food - Modern Food Delivery App

## 📱 Overview
Exspres Food is a modern, feature-rich food delivery application built with cutting-edge web technologies. It provides a seamless experience for users to order their favorite meals with real-time tracking and a beautiful, responsive interface.

## ✨ Key Features
- 🎨 Modern and intuitive UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🛒 Interactive shopping cart with real-time updates
- 🔍 Smart search and filter options for food items
- 🛵 Real-time order tracking system
- 💳 Multiple payment method support
- 👤 User authentication (login/signup)
- 🌙 Splash screen with animated background

## 🛠️ Tech Stack
- **Frontend Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide Icons
- **State Management:** React Context API
- **Animations:** CSS Transitions & Animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd food-delivery-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure
```
food-delivery-app/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── CartScreen.tsx
│   │   ├── CheckoutScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── SplashScreen.tsx
│   │   └── TrackingScreen.tsx
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── index.tsx       # Application entry point
├── public/
│   ├── images/         # Static image assets
│   └── index.html      # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── vite.config.ts      # Vite configuration
```

## 📱 Core Functionality
- **Authentication Flow**
  - User registration and login
  - Secure session management
- **Food Ordering**
  - Browse food categories
  - Search and filter items
  - Add/remove items from cart
  - Adjust quantities
- **Checkout Process**
  - Multiple payment options
  - Address selection
  - Order confirmation
- **Order Tracking**
  - Real-time status updates
  - Delivery time estimation
  - Delivery partner tracking

## 🎨 UI/UX Features
- Responsive design that adapts to all screen sizes
- Smooth transitions between screens
- Loading states and animations
- Error handling with user-friendly messages
- Intuitive navigation

## 🛠️ Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing
This project is developed as part of the MPTI Group Project - Exspres Food. Contributions, issues, and feature requests are welcome!

## 👥 Team
- Ardian_Mizu (Lead Developer)
- [Other team members...]

## 📄 License
This project is private and developed for educational purposes as part of MPTI coursework.

---
Developed with ❤️ by MPTI Group - Exspres Food
