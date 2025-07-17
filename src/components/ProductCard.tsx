import Image from 'next/image'

type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category?: string
  description: string
  onView: () => void
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  onView,
}: Product) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center transition hover:scale-105">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded"
          sizes="300px"
        />
      </div>
      <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
      <div className="flex gap-2 items-center justify-center">
        <span className="text-blue-600 font-semibold text-xl">${price}</span>
        {originalPrice && (
          <span className="text-sm line-through text-gray-400">${originalPrice}</span>
        )}
      </div>
      <button
        onClick={onView}
        className="mt-4 w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        View Product
      </button>
    </div>
  )
}
