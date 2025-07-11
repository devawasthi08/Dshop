import React from 'react';
import {
  FaMobileAlt,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaInstagram
} from 'react-icons/fa';

const FooterLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Contact", link: "/#Contact" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950 bg-white'>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-10">

          
          <div>
            <a href="#"
              className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              DSHOP
            </a>
            <p className='text-gray-600 dark:text-white/70 pt-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto tempora in modi molestias animi!
            </p>
            <p className='text-gray-500 mt-4'>Made by Dev</p>
          </div>

          <div>
            <h1 className='text-xl font-bold mb-3'>Important Links</h1>
            <ul className='space-y-3'>
              {FooterLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                    className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
            <ul className='space-y-3'>
              {FooterLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                    className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className='text-xl font-bold mb-3'>Address</h1>
            <div className="flex items-start gap-3">
              <FaLocationArrow className="mt-1" />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#"><FaInstagram className='text-2xl hover:text-primary duration-300' /></a>
              <a href="#"><FaFacebook className='text-2xl hover:text-primary duration-200' /></a>
              <a href="#"><FaLinkedin className='text-2xl hover:text-primary duration-200' /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
