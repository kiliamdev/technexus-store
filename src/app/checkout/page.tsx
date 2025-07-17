'use client'

import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  })

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(`Thank you, ${formData.name}! Your order has been placed.`)
    clearCart()
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    })
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 🛒 Cart Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded shadow"
                >
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-lg font-semibold text-right">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          {/* 📦 Checkout Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP Code"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
