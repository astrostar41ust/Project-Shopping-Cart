import React from 'react'
import { useOutletContext} from 'react-router-dom'
import Header from '../Header'

export default function Cart() {

  const {cart, products} = useOutletContext()
  const cartItems = []
 
  for(const [productId, quantity] of cart) {
    const product = products.find(product => product.id === productId)
    const fullDetailedProduct = {...product, quantity: quantity}
    cartItems.push(fullDetailedProduct)
  }

  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)
 
  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500">Add some products to get started!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-green-600">${item.price}</span>
                    <span className="text-gray-500">Quantity: {item.quantity}</span>
                    <span className="text-lg font-semibold text-blue-600">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>
                <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
