
function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/src/assets/logo-text.png"
              alt="DevStack"
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm text-gray-500 max-w-xs">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-semibold text-gray-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 tracking-wide">PRODUCT</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#">Home</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 tracking-wide">COMPANY</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-900 tracking-wide">LEGAL</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;