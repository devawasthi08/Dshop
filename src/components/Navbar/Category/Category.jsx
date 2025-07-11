import React from "react";
import Image1 from "../../../assets/earphone.png";
import Image2 from "../../../assets/macbook.png";
import Image3 from "../../../assets/watch.png";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Category = () => {
  const navigate = useNavigate();

  return (
    <section className="shop" id="shop">
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end overflow-hidden">
  <div className="mb-4 z-10 relative">
    <p>Enjoy</p>
    <p className="text-2xl font-semibold">with</p>
    <p className="text-4xl font-bold opacity-40 mb-2">Earphones</p>
    <Button
      text="Browse"
      bgColor="bg-white"
      textColor="text-primary"
      onClick={() => navigate("/products/")}
    />
  </div>
  <img
    src={Image1}
    alt="earphone"
    className="w-[320px] absolute bottom-0 right-0 z-0"
  />
</div>




          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p>Track</p>
              <p className="text-2xl font-semibold">your</p>
              <p className="text-4xl font-bold opacity-60 mb-2">Watch</p>
              <button onClick={() => navigate("/products/electronics")}>
                <Button text="Browse" bgColor="bg-white" textColor="text-brandYellow" />
              </button>
            </div>
            <img src={Image3} alt="watch" className="w-[320px] absolute -right-20 lg:top-[40px]" />
          </div>

          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div className="mb-4">
              <p>Work</p>
              <p className="text-2xl font-semibold">on</p>
              <p className="text-4xl font-bold opacity-60 mb-2">Macbook</p>
              <button onClick={() => navigate("/products/men's clothing")}>
                <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </button>
            </div>
            <img src={Image2} alt="macbook" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Category;
