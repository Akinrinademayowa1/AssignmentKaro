import React from "react";
import ReactDOM from "react-dom/client";

// Main App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Register Karo</h1>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
);

// Hero Section Component
const HeroSection = () => (
  <section className="hero">
    <h1>Welcome to Register Karo</h1>
    <p>Your one-stop platform for seamless registration.</p>
    <button className="cta-button">Get Started</button>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Register Karo. All rights reserved.</p>
  </footer>
);

// Render React App
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
