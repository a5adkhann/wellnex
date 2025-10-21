import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
  style={{ willChange: "transform, background, filter, box-shadow" }}
  animate={{
    background: isScrolled
      ? "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
      : "rgba(0,0,0,0)",
    border: isScrolled
      ? "1px solid rgba(100,255,100,0.25)"
      : "1px solid transparent",
    boxShadow: isScrolled
      ? "0 4px 25px rgba(0,255,100,0.15)"
      : "0 4px 30px rgba(0,0,0,0)",
    backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
    scale: isScrolled ? 0.97 : 1,
    width: isScrolled ? "80%" : "90%",
  }}
  transition={{
    background: { duration: 0.25, ease: "easeInOut" },
    border: { duration: 0.2, ease: "easeOut" },
    boxShadow: { duration: 0.25, ease: "easeInOut" },
    backdropFilter: { duration: 0.3, ease: "easeOut" },
    scale: { duration: 0.2, ease: "easeOut" },
    width: { duration: 0.25, ease: "easeInOut" },
  }}
  className="mx-auto flex items-center justify-center md:justify-between px-6 py-4 rounded-full mt-2 transition-all duration-300"
>
        {/* 📱 Mobile Button */}
        <div className="md:hidden absolute left-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 transition"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 🌟 Logo */}
        <motion.div
          animate={{ scale: isScrolled ? 0.9 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center space-x-2"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover border border-white/40 shadow-md"
          />
          <span className="text-lg font-semibold text-white">MyBrand</span>
        </motion.div>

        {/* 🌈 Links */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Apps", "About", "Contact"].map((name) => (
            <Link
              key={name}
              to={`/${name === "Home" ? "" : name.toLowerCase()}`}
              className={`text-white hover:text-green-400 font-medium transition ${
                activePage === name.toLowerCase()
                  ? "text-green-400 font-bold"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* 💚 Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Link
            to="/contact"
            className="md:flex hidden  bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md"
          >
            Join Now
          </Link>
        </motion.div>
      </motion.div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 z-10"
          >
            <div className="px-4 py-4 space-y-4">
              {["Home", "Our Apps", "About", "Contact"].map((name) => (
                <Link
                  key={name}
                  to={`/${name === "Home" ? "" : name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-800 hover:text-black transition ${
                    activePage === name.toLowerCase()
                      ? "text-black font-bold"
                      : ""
                  }`}
                >
                  {name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-full font-medium"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
