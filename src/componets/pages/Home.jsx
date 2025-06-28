import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-blue-100 to-gray-50 py-12">
        <div className="max-w-2xl text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome to ShineProdigy!</h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy a seamless shopping experience with our curated collection.
          </p>
          <Link to="/shop">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
              Start Shopping
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home