'use client'

import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <form className="bg-white p-6 rounded shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Write your message..."
              rows={4}
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>

          <button
            type="button"
            onClick={() => alert('This form is for display only.')}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>

        {/* 📌 FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-medium">How can I track my order?</h3>
              <p className="text-sm text-gray-600">
                Once your order is placed, you will receive a confirmation email with tracking info.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-medium">Can I return a product?</h3>
              <p className="text-sm text-gray-600">
                Yes! We offer a 14-day return policy for all unused products in original packaging.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-medium">How do I contact support?</h3>
              <p className="text-sm text-gray-600">
                You can reach our team anytime via this form or by emailing support@technexus.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
