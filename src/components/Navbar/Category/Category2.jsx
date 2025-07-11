import React from "react";
import Image1 from "../../../assets/gaming.png";
import Image2 from "../../../assets/vr.png";
import Image3 from "../../../assets/speaker.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Category2 = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p>Play</p>
              <p className="text-2xl font-semibold">With</p>
              <p className="text-4xl font-bold opacity-60 mb-2">PS4</p>
              <button onClick={() => navigate("/products/men's clothing")}>
                <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </button>
            </div>
            <img src={Image1} alt="ps4" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="mb-4">
              <p>Listen</p>
              <p className="text-2xl font-semibold">with</p>
              <p className="text-4xl font-bold opacity-40 mb-2">Speaker</p>
              <button onClick={() => navigate("/products/women's clothing")}>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandBlue" />
              </button>
            </div>
            <img src={Image3} alt="speaker" className="w-[200px] absolute bottom-0 right-0" />
          </div>

        <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start overflow-hidden">
  <div className="mb-4 z-10 relative">
    <p>Experience</p>
    <p className="text-2xl font-semibold">Real</p>
    <p className="text-4xl font-bold opacity-60 mb-2">VR</p>
    <Button
      text="Browse"
      bgColor="bg-white"
      textColor="text-brandGreen"
      onClick={() => navigate("/products/men's clothing")}
    />
  </div>
  <img
    src={Image2}
    alt="vr"
    className="w-[320px] absolute bottom-0 right-0 z-0"
  />
</div>


          </div>

        </div>
      </div>
    
  );
};

export default Category2;
