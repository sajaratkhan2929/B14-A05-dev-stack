const Navbar = () => {
  return (
<nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Mobile hamburger (left on mobile, hidden on desktop) */}
          <button className="order-1 md:hidden text-2xl text-gray-700">
            ☰
          </button>

          {/* Logo */}
          <a href="/" className="order-2 md:order-1 mx-auto md:mx-0">
            <img
              src="/src/assets/logo-text.png"
              alt="DevStack"
              className="w-32 md:w-40 h-auto"
            />
          </a>

          {/* Menu (desktop only) */}
          <div className="hidden md:flex md:order-2 items-center gap-8">
            <a href="#home" className="text-pink-600 font-medium">
              Home
            </a>

            <a href="#technologies" className="text-gray-700 hover:text-pink-600">
              Technologies
            </a>

            <a href="#projects" className="text-gray-700 hover:text-pink-600">
              Projects
            </a>

            <a href="#about" className="text-gray-700 hover:text-pink-600">
              About
            </a>

            <a href="#contact" className="text-gray-700 hover:text-pink-600">
              Contact
            </a>
          </div>

          {/* Buttons (both mobile and desktop) */}
<div className="order-3 flex items-center gap-2 md:gap-4">
  <button className="text-gray-700 text-sm md:text-base">
    Sign In
  </button>

  <button className="bg-pink-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-pink-700 text-sm md:text-base">
    Sign Up
  </button>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;