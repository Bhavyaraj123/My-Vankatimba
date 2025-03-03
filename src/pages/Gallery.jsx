import React, { useState } from "react";
import { motion } from "framer-motion";

const images = Array.from({ length: 20 }, (_, i) => `/images/${i + 1}.jpg`);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4 mt-16">
      {/* Pinterest-Style Masonry Layout */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer break-inside-avoid rounded-xl overflow-hidden shadow-lg"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative p-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded-full shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
