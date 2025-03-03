import React from "react";

const Donation = () => {
  return (
    <div className="min-h-screen bg-[#BF3D0D] flex flex-col items-center justify-center p-6">
      {/* Container */}
      <div className="max-w-2xl bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">🙏 દાન પાનું 🙏</h1>

        {/* Gujarati Message */}
        <p className="mt-4 text-gray-600">
          હાલમાં, વેબસાઈટમાં **દાન કરવાની સુવિધા ઉપલબ્ધ નથી**, પણ ટૂંક સમયમાં 
          આ વિકલ્પ ઉમેરવામાં આવશે. જો તમે દાન કરવા ઈચ્છતા હો, તો **ગ્રુપના વહીવટદાર 
          સભ્યોનો સંપર્ક** કરીને દાન નોંધાવી શકો છો. 💖
        </p>

        {/* Gujarati Donation Quote */}
        <blockquote className="mt-6 italic text-lg text-gray-700 border-l-4 border-green-500 pl-4">
          "દાન એ જ સારું સંચાલન છે, કારણ કે જે કંઈ આપણે આપીએ છીએ તે અનેકગણું
          થઈને પાછું આવે છે."
        </blockquote>

        {/* Contact Button (For Now) */}
        <div className="mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-600 transition">
            સંપર્ક કરો 📞
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
