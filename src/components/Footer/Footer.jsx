import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/logo/PichPiseyLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-700 border-t mt-30">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div>
            <h2 className="text-[18px] font-bold font-Style text-pink-300">
              Pich Pisey Shop
            </h2>
            <p className="text-sm text-gray-500 mb-4">Your Tagline here</p>
            <h3 className="font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              We want to help bring talented students and unique startups
              together.
            </p>
            <div className="flex items-center text-sm gap-2 mb-2">
              <MdPhone className="text-pink-500" />
              <span>+91 9999 999 999</span>
            </div>
            <div className="flex items-center text-sm gap-2">
              <MdEmail className="text-pink-500" />
              <span>youremailid.com</span>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  More Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="font-semibold mb-3">Helpful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Supports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe For More</h3>
            <div className="flex mb-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-3 py-2 border rounded-l-md text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-4 rounded-r-md">
                →
              </button>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-6">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="flex gap-4 mb-2 md:mb-0">
              <a href="#" className="hover:text-pink-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaGooglePlusG />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
            <p>2018 © company.ltd | All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
