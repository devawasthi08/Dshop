import React from "react";
import Heading from "../Heading/Heading";
import ProductCard from "./ProductCard";
import { useCart } from "../CartContext/CartContext";

import Img1 from "../../../assets/p-1.jpg";
import Img2 from "../../../assets/p-2.jpg";
import Img3 from "../../../assets/p-3.jpg";
import Img4 from "../../../assets/p-4.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosdelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Mountain",
    price: "420",
    aosdelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosdelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosdelay: "600",
  },
];

const Products = () => {
  const { addToCart } = useCart(); 

  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subTitle="Explore Our Products" />
        <ProductCard data={ProductsData} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default Products;
