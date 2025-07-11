import React from 'react';

const Button = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
