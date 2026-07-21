export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <span className="text-3xl">🎬</span>

          <h1 className="text-2xl font-bold tracking-wider text-white">
            CINEPHILE
          </h1>

        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Movies
          </a>

          <a href="#" className="hover:text-white transition">
            Actors
          </a>

          <a href="#" className="hover:text-white transition">
            Community
          </a>

        </div>

        {/* Login Button */}
        <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full font-semibold">
          Login
        </button>

      </div>
    </nav>
  );
}