import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center p-6">
      {/* Container */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6">
        
        {/* Village Info */}
        <div className="text-center md:text-left">
          <p className="mt-4 text-lg text-gray-700 font-semibold">🏡 ગામ: વાંકાટીંબા</p>
          <p className="mt-2 text-lg text-gray-700 font-semibold">📞 સંપર્ક: +91 000000000</p>
          <p className="mt-2 text-md text-gray-600">🏛️ પ્રખ્યાત સ્થળ: જય ખેમાસ મા મંદિર</p>
          <p className="mt-2 text-md text-gray-600">👥 વસ્તી: અંદાજે 400+</p>

          <a
            href="https://www.google.com/maps/place/Jay+Khemas+Ma+Temple,Vankatimba/@23.6656521,73.4768807,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
          >
            📍 ગૂગલ મેપમાં જુઓ
          </a>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2 h-64 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.7713181664558!2d73.4768807!3d23.6656521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967602df7f503a5%3A0x7f26629d0b0346a4!2sJay%20Khemas%20Ma%20Temple%2C%20Vankatimba!5e0!3m2!1sen!2sin!4v1709448923123"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;