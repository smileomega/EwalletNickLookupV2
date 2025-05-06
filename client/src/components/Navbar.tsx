import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold">eWalletNickLookup</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/articles" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Artikel
              </Link>
              <Link href="/about-us" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Tentang Kami
              </Link>
              <Link href="/api-docs" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                API Docs
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md">
              Home
            </Link>
            <Link href="/articles" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
              Artikel
            </Link>
            <Link href="/about-us" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
              Tentang Kami
            </Link>
            <Link href="/api-docs" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md">
              API Docs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
