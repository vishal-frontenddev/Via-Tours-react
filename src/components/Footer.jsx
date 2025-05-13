import React from "react";
import bgImage from "../assets/bg.svg fill.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-sm text-gray-700"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Phone Section */}
        <div className="text-center mb-10">
          <p className="text-lg font-semibold">
            Speak to our expert at{" "}
            <span className="text-orange-500 font-bold">1-800-453-6744</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>328 Queensberry Street, North Melbourne VIC3051, Australia.</p>
            <p className="text-blue-600 mt-2">hi@viatours.com</p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Tourz Reviews</li>
              <li>Contact Us</li>
              <li>Travel Guides</li>
              <li>Data Policy</li>
              <li>Cookie Policy</li>
              <li>Legal</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Get in Touch</li>
              <li>Help center</li>
              <li>Live chat</li>
              <li>How it works</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="mb-2">Subscribe to the free newsletter and stay up to date</p>
            <div className="flex items-center border rounded-md p-1 w-full max-w-xs">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-2 py-1 outline-none bg-transparent"
              />
              <button className="text-white bg-gray-800 px-3 py-1 rounded-md">
                Send
              </button>
            </div>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="font-semibold mb-2">Mobile Apps</h3>
            <ul className="space-y-1">
              <li>iOS App</li>
              <li>Android App</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 text-center text-xs text-gray-500">
          <p>© Copyright 2024</p>
          {/* Payment Icons */}
          <div className="mt-2 flex justify-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg" alt="PayPal" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Mastercard_2019_logo.svg" alt="Mastercard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
