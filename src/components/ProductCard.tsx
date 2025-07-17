// /components/ProductCard.tsx
import Link from 'next/link'
import Image from 'next/image'

// components/ProductCard.tsx

type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  onView?: () => void
}

export default function ProductCard({ id, name, price, originalPrice, image, onView }: Product) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-blue-600 font-bold">${price}</p>
        {originalPrice && (
          <p className="text-sm line-through text-gray-400">${originalPrice}</p>
        )}
        <button
          onClick={onView}
          className="mt-2 bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          View Product
        </button>
      </div>
    </div>
  )
}
