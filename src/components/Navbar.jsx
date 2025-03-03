import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-orange-700 bg-opacity-90 shadow-lg" : "bg-orange-700"
      } text-white py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">વાંકાટીંબા મંદિર</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              દર્શન
            </Link>
          </li>
          <li>
            <Link to="/card" className="hover:text-yellow-300 transition">
              મંદિર
            </Link>
          </li>
          <li>
            <Link to="/timings" className="hover:text-yellow-300 transition">
              દર્શન અને આરતી સમય
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-yellow-300 transition">
              ઇવેન્ટ્સ અને ઉત્સવ
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-yellow-300 transition">
              ફોટો ગેલેરી
            </Link>
          </li>
          <li>
            <Link to="/donation" className="hover:text-yellow-300 transition">
              દાન પાનું
            </Link>
          </li>
          <li>
            <Link to="/map" className="hover:text-yellow-300 transition">
              સંપર્ક અને સ્થાન
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-orange-700 bg-opacity-95 text-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                દર્શન
              </Link>
            </li>
            <li>
              <Link
                to="/card"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                મંદિર
              </Link>
            </li>
            <li>
              <Link
                to="/timings"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                દર્શન અને આરતી સમય
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                ઇવેન્ટ્સ અને ઉત્સવ
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                ફોટો ગેલેરી
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                દાન પાનું
              </Link>
            </li>
            <li>
              <Link
                to="/map"
                className="hover:text-yellow-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                સંપર્ક અને સ્થાન
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
