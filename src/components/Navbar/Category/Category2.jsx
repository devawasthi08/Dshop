import React from "react";
import Image1 from "../../../assets/gaming.png";
import Image2 from "../../../assets/vr.png";
import Image3 from "../../../assets/speaker.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Category2 = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
        
          <div className="col-span-1 sm:col-span-2 relative h-[300px] sm:h-[320px] bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Play</p>
              <p className="text-xl sm:text-2xl font-semibold">With</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80 mb-2">PS4 / Women Clothes</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-primary"
                onClick={() => navigate("/products/women's clothing")}
              />
            </div>
            <img
              src={Image1}
              alt="ps4"
              className="absolute top-1/2 -translate-y-1/2 right-0 w-36 sm:w-52 md:w-64 object-contain z-0"
            />
          </div>

         
          <div className="relative h-[300px] sm:h-[320px] bg-gradient-to-br from-sky-600 to-sky-400 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Listen</p>
              <p className="text-xl sm:text-2xl font-semibold">with</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80 mb-2">Speaker / Electronic</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-sky-600"
                onClick={() => navigate("/products/electronics")}
              />
            </div>
            <img
              src={Image3}
              alt="speaker"
              className="absolute bottom-0 right-2 w-28 sm:w-36 md:w-44 object-contain z-0"
            />
          </div>

          
          <div className="relative h-[300px] sm:h-[320px] bg-gradient-to-br from-emerald-500 to-emerald-400 text-white rounded-3xl p-5 flex items-end overflow-hidden">
            <div className="z-10 space-y-1 mb-4">
              <p>Experience</p>
              <p className="text-xl sm:text-2xl font-semibold">Real</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80 mb-2">VR / Jewelery</p>
              <Button
                text="Browse"
                bgColor="bg-white"
                textColor="text-emerald-600"
                onClick={() => navigate("/products/jewelery")}
              />
            </div>
            <img
              src={Image2}
              alt="vr"
              className="absolute bottom-0 right-2 w-36 sm:w-44 md:w-52 object-contain z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category2;
