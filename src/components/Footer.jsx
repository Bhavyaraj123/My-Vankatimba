import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(191,61,13)] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Section - Copyright */}
        <p className="text-lg font-semibold">™ {new Date().getFullYear()} Developed by Bhavyarajsinh Bihola</p>

        {/* Right Section - Village Details */}
        <div className="mt-4 md:mt-0">
          
          {/* <a 
            href="https://www.google.com/maps/place/Jay+Khemas+Ma+Temple,Vankatimba/@23.6656521,73.4768807,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline text-sm"
          >
            📍 View on Google Maps
          </a> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
