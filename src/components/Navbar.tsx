export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto" />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="text-pink-600 font-semibold">Home</a>
        <a href="#" className="hover:text-gray-900 transition">Technologies</a>
        <a href="#" className="hover:text-gray-900 transition">Projects</a>
        <a href="#" className="hover:text-gray-900 transition">About</a>
        <a href="#" className="hover:text-gray-900 transition">Contact</a>
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        <button className="text-gray-700 hover:text-gray-900">Sign In</button>
        <button className="px-4 py-2 rounded-full brand-gradient text-white hover:opacity-90 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}