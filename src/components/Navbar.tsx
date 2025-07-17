export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">TechNexus</h1>
        <div className="flex gap-6 text-gray-600">
          <a href="/store">Store</a>
           {/* <a href="/cart">Cart</a> */}
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  )
}
