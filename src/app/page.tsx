'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="h-screen bg-[#0f172a] text-white flex items-center justify-center relative overflow-hidden">
      <Image
        src="/hero-tech.png"
        alt="TechNexus Background"
        fill
        className="object-cover opacity-20 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechNexus</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">Your hub for premium tech gear</p>
        <Link href="/store">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition">
            Browse Products
          </button>
        </Link>
      </motion.div>
    </main>
  )
}
