import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("API error:", err));
  }, [category]);

  return (
    <div className="container py-10">
      <Heading title={`Category: ${category}`} subTitle="Browse items from this category" />
      <ProductCard data={products} />
    </div>
  );
};

export default CategoryProducts;
