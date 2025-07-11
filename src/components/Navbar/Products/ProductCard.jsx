import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ data, onAddToCart }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {data.map((item) => (
          <div className='group' key={item.id}>
            <div className='relative'>
              <img
                src={item.image || item.img}
                alt={item.title}
                className='h-[180px] w-[260px] object-contain rounded-md'
              />
              <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center justify-center items-center duration-200 bg-white/40 backdrop-blur-sm'>
                <Button
                  text={'Add to Cart'}
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                  onClick={() => onAddToCart && onAddToCart(item)}
                />
              </div>
            </div>
            <div className='leading-7 text-center mt-2'>
              <h2 className='font-semibold'>{item.title}</h2>
              <h2 className='font-bold'>${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
