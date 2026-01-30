import { useState } from "react";
import { Navigate,Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition" to={'/signin'}>
              Login
            </Link>
            <Link className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" to={'/signup'}      >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}

            <button className="w-32 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
            <button className="w-32 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
