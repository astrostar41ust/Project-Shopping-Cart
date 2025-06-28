import React from "react";
import { Link} from "react-router-dom";

function Header({cartItemsCount}) {
 

  return (
    <header className="sticky top-0 z-50 w-full border-b px-6 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
      <div className="flex items-center justify-between py-3 mx-auto">
        <Link to="/">
          <div className="px-3 py-1 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
            <span className="text-white font-extrabold text-2xl tracking-wide drop-shadow">ShineProdigy</span>
          </div>
        </Link>

        <nav className="flex flex-1 space-x-8 justify-center">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-lg">
            Home
          </Link>
          <Link to="/shop" className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-lg">
            Shop
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative group">
            <img src="/shopping-cart.png" className="w-10 h-10 group-hover:scale-110 transition-transform" alt="Cart" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
