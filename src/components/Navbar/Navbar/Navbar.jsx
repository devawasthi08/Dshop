// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const MenuLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Shop", link: "shop" },
  { id: 3, name: "About", link: "about" },
  { id: 4, name: "Blogs", link: "blog" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.reload();
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-40 ${scrolled ? 'shadow-md' : ''}`}>
      <div className='py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between lg:hidden'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase'>
              Dshop
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl font-bold'>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          <div className={`lg:flex justify-between items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
            <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
              <a href="#" className='hidden lg:block text-primary font-semibold tracking-widest text-2xl uppercase'>
                Dshop
              </a>

              <ul className='flex flex-col lg:flex-row gap-4'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <button
                      onClick={() => handleNavClick(data.link)}
                      className='px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                    >
                      {data.name}
                    </button>
                  </li>
                ))}

                <li className='relative group'>
                  <a
                    href="#"
                    className='flex items-center gap-1 font-semibold text-gray-500 dark:hover:text-white'
                  >
                    Quick Links
                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                  </a>
                  <div className='absolute hidden group-hover:block bg-white dark:bg-gray-900 shadow-md mt-2 rounded-md z-50 w-48 p-2'>
                    {DropdownLinks.map(link => (
                      <a
                        key={link.id}
                        href={link.link}
                        className='block px-4 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md'
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className='flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 items-start lg:items-center'>
              <div className='relative hidden sm:block'>
                <input
                  type="text"
                  placeholder='Search'
                  className='px-4 py-2 border rounded-md focus:outline-none text-black'
                />
                <IoMdSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 dark:text-gray-400' />
              </div>
              <div className='sm:hidden'>
                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400' />
              </div>
              <button className='relative p-3'>
                <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'></div>
              </button>

              {user && (
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 text-sm">
                  <span className="text-gray-700 dark:text-white font-medium">Hello, {user}</span>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 border border-red-500 px-2 py-1 rounded-md hover:bg-red-500 hover:text-white duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
