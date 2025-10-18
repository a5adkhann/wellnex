import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-16 px-6 md:px-16 lg:px-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold font-poppins text-white mb-4">
            Wellnex<span className="text-[#34C759]"> Systems</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-inter">
            Empowering wellness through innovation — connecting body, mind, and technology
            for a healthier tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-white font-semibold mb-4 text-xl font-poppins">
            Quick Links
          </h3>
          <ul className="space-y-2 font-inter">
            {["Home", "About", "Our Apps", "Why Wellness", "Future Vision", "Contact"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#34C759] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="md:text-right">
          <h3 className="text-white font-semibold mb-4 text-xl font-poppins">
            Stay Connected
          </h3>
          <div className="flex md:justify-end gap-4 mb-6">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-10 h-10 flex justify-center items-center bg-white/10 hover:bg-[#34C759] rounded-full text-white hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm font-inter">
            © {new Date().getFullYear()} Wellnex Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
