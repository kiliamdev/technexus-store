'use client'

import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import ProductModal from '@/components/ProductModal'
import { Product, products } from '@/data/products'
import { useState } from 'react'

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const openProduct = (product: Product) => {
    setSelectedProduct(product)
    setIsOpen(true)
  }

  const allCategories = [
    'All',
    ...Array.from(new Set(products.map((p) => p.category).filter(Boolean) as string[]))
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <>
      <Navbar />
      <div className={`bg-gray-100 min-h-screen transition ${isOpen ? 'blur-sm pointer-events-none' : ''}`}>
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Browse products</h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} onView={() => openProduct(product)} />
            ))}
          </div>
        </div>
      </div>

      <ProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} product={selectedProduct} />
    </>
  )
}
