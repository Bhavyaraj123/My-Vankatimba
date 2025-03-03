import React from 'react'

const Events = () => {
    return (
        <>
        <div className="bg-yellow-400 min-h-screen flex justify-center items-center p-6 flex-col gap-5" id='events'>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            {/* Event Header */}
            <div className="flex items-center gap-4 border-b-2 border-yellow-500 pb-3">
              <div className="bg-yellow-500 p-3 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/929/929564.png"
                  alt="Event Icon"
                  className="w-10 h-10"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">આવનાર ઇવેન્ટ્સ અને ઉત્સવ</h2>
            </div>
    
            {/* Event Details */}
            <div className="mt-4 space-y-4">
              {/* Heading */}
              <div>
                <p className="text-lg font-bold text-gray-700">📌 ઇવેન્ટનું નામ:</p>
                <p className="text-gray-600 font-semibold">ચૈત્રી પુનમ હવન </p>
              </div>
    
              {/* Description */}
              <div>
                <p className="text-lg font-bold text-gray-700">📜 વર્ણન:</p>
                <p className="text-gray-600 font-semibold">
                તા. 12 એપ્રિલ 2025 ના રોજ કુળદેવી માં ક્ષેમકલ્યાણી મંદિર માં પવિત્ર હવન નું આયોજન કરવામાં આવ્યું છે. બધા ભક્તજનોને ભાવભેર આમંત્રણ છે.  
                </p>
              </div>
    
              {/* Date */}
              <div>
                <p className="text-lg font-bold text-gray-700">📅 તારીખ:</p>
                <p className="text-gray-600 font-semibold">12 એપ્રિલ, 2025</p>
              </div>
    
              {/* Fund */}
              <div>
                <p className="text-lg font-bold text-gray-700 ">💰 ભંડોળ:</p>
                <p className="text-gray-600 font-semibold">02/03/2025 ના રોજ અમદાવાદમાં રાખવામાં આવેલી મિટિંગમાં સર્વાનુમતે 
                નક્કી કરેલું ફંડ ₹3,000 સમયમર્યાદામાં જમા કરાવવાની વિનંતી.</p>
              </div>
            </div>
          </div>
        </div>
        </>
      );
}

export default Events