import React from "react";
import Image1 from "../../../assets/earphone.png";
import Image2 from "../../../assets/macbook.png";
import Image3 from "../../../assets/watch.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Category = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         
          <div className="relative h-[300px] sm:h-[320px] bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Enjoy</p>
              <p className="text-xl sm:text-2xl font-semibold">with</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-60 mb-2">Earphones / Electronics</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-primary"
                onClick={() => navigate("/products/electronics")}
              />
            </div>
            <img
              src={Image1}
              alt="earphone"
              className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 object-contain z-0"
            />
          </div>

          <div className="relative h-[300px] sm:h-[320px] bg-gradient-to-br from-yellow-400 to-yellow-300 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Track</p>
              <p className="text-xl sm:text-2xl font-semibold">your</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80 mb-2">Watch / Jewelery</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-yellow-500"
                onClick={() => navigate("/products/jewelery")}
              />
            </div>
            <img
              src={Image3}
              alt="watch"
              className="absolute bottom-0 right-2 w-24 sm:w-32 md:w-40 lg:w-48 object-contain z-0"
            />
          </div>

          
          <div className="col-span-1 sm:col-span-2 relative h-[300px] sm:h-[320px] bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Work</p>
              <p className="text-xl sm:text-2xl font-semibold">on</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80 mb-2">Macbook / Men Clothes</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-primary"
                onClick={() => navigate("/products/men's clothing")}
              />
            </div>
            <img
              src={Image2}
              alt="macbook"
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 w-40 sm:w-56 md:w-64 object-contain z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
