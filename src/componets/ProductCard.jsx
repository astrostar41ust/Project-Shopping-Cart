import React from "react";

function ProductCard({title, price, category, image, handleAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 w-full max-w-xs m-4 border border-gray-200 h-96">
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-4 rounded" />
      <h3 className="text-base font-semibold text-gray-800 mb-1 text-center">{title}</h3>
      <h4 className="text-sm text-blue-600 mb-2 text-center">{category}</h4>
      <div className="mt-auto w-full">
        <h4 className="text-xl font-bold text-green-600 mb-4 text-center">${price}</h4>    
        <button 
          type="button" 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
