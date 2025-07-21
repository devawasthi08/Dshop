import React from 'react';
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: 'Safe Money',
    description: '30 Days Money Back',
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: 'Secure Payment',
    description: 'All Payment Secure',
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: 'Online Support 24/7',
    description: 'Technical Support 24/7',
  },
];

const Services = () => {
  return (
    <section className="about" id="about">
      <div className="container mx-auto px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="mb-3">{data.icon}</div>
              <h1 className="text-lg md:text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
