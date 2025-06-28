import React from 'react'
import {useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function Shop() {
  const {products, handleAddToCart} = useOutletContext()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h1>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              handleAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
