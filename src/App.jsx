import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Category from './components/Navbar/Category/Category';
import Category2 from './components/Navbar/Category/Category2';
import Services from './components/Navbar/Services/Services';
import Login from './components/Navbar/Login/Login';
import Banner from './components/Navbar/Banner/Banner';
import Products from './components/Navbar/Products/Products';
import CategoryProducts from './components/Navbar/Products/CategoryProducts';
import Footer from './components/Navbar/Footer/Footer';
import Cart from './components/Navbar/CartContext/Cart';
import { CartProvider } from './components/Navbar/CartContext/CartContext'; 
import headphone from "./assets/headphone.png";
import smartwatch2 from "./assets/smartwatch2-removebg-preview.png";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const BannerData = {
    discount: '30% OFF',
    title: 'Fine Smile',
    date: '10 Jan to 28 Jan',
    image: headphone,
    title2: 'Air Solo Bass',
    title3: 'Summer Sale',
    bgColor: '#f42c37'
  };

  const BannerData2 = {
    discount: '30% OFF',
    title: 'Happy Hours',
    date: '10 Jan to 28 Jan',
    image: smartwatch2,
    title2: 'Smart Watch',
    title3: 'Summer Sale',
    bgColor: '#2dcc6f'
  };

  return (
    <CartProvider> 
      <Router>
        <ScrollToHashElement />
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            {!user ? (
              <>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="*" element={<Login setUser={setUser} />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <Category />
                      <Category2 />
                      <Services />
                      <Banner data={BannerData} />
                      <Products />
                      <Banner data={BannerData2} />
                      <Footer />
                    </>
                  }
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products/:category" element={<CategoryProducts />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
