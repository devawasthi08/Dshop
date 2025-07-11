
import React from 'react';

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} font-semibold`}>
      {text}
    </button>
  );
};

export default Button;
