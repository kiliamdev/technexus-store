'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Product } from '@/data/products'
import { useRouter } from 'next/navigation'

type Props = {
  isOpen: boolean
  onClose: () => void
  product: Product | null
}

export default function ProductModal({ isOpen, onClose, product }: Props) {
  const { addToCart } = useCart()
  const router = useRouter()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
    router.push('/cart') // Navigál a kosárhoz
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 text-center backdrop-blur-sm bg-black/40">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="inline-block w-full max-w-2xl my-20 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <Dialog.Title className="text-2xl font-bold">{product.name}</Dialog.Title>
                  <p className="text-gray-700 text-sm">{product.description}</p>
                  <p className="text-xl font-semibold text-blue-600">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm line-through text-gray-400">
                      ${product.originalPrice}
                    </p>
                  )}
                  <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                ×
              </button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
