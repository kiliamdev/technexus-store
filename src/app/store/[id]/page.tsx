
import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id))

  if (!product) return notFound()

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">${product.price}</p>
          {product.originalPrice && (
            <p className="text-sm line-through text-gray-400">${product.originalPrice}</p>
          )}

          <Link
            href="/cart"
            className="inline-block mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  )
}
