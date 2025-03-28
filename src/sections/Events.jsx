import React from 'react';

const eventsData = [
  {
    id: 1,
    name: "ચૈત્રી પુનમ હવન",
    description:
      "તા. 12 એપ્રિલ 2025 ના રોજ કુળદેવી માં ક્ષેમકલ્યાણી મંદિર માં પવિત્ર હવન નું આયોજન કરવામાં આવ્યું છે. બધા ભક્તજનોને ભાવભેર આમંત્રણ છે.",
    date: "12 એપ્રિલ, 2025",
    fund: "02/03/2025 ના રોજ અમદાવાદમાં રાખવામાં આવેલી મિટિંગમાં સર્વાનુમતે નક્કી કરેલું ફંડ ₹3,000 સમયમર્યાદામાં જમા કરાવવાની વિનંતી.",
  },
  {
    id: 2,
    name: "",
    description:[
      "મંદિરની ખાતે હર હંમેશા એક મોટી સમસ્યા પાણીની હતી જે હજુ સુધી રહી..",
      " પાણીની સમસ્યા નું કાયમી ઉકેલ આવે તે માટે *બિહોલા મહેન્દ્રસિંહ જુજારસિંહ @+91 99135 45446  ( જય માતાજી ઓટો કન્સલ્ટ ) તરફથી બોરવેલ💧 મંદિર મુકામે કરાવી આપ્યો.",
      "- 350 ફુટ બોરવેલ મંદિર ખાતે કરાવેલ છે"
    ],
    fund: " 350 ફુટ બોરવેલ  :  32,000- મોટર, બોર્ડ અને કેબલ : 39,000",
  },
  {
    id: 3,
    description:[
      "- મંદિર ખાતે સામાન મૂકવાની પણ રૂમ 🏠 બનાવવા માટે પણ સમસ્યા હતી જેથી તે સમસ્યા પણ તેમને દૂર કરી છે.",
      "- મંદિરમાં પ્રવેશ કરતાં ગેટની ડાબી તરફ બસ સ્ટેન્ડ તરફથી જગ્યામાં રૂમ બનાવાય છે.",
      "- તે માટેનો સંપૂર્ણ ખર્ચ 2,51,000 ( અંકે બે લાખ એકાવન હજાર રૂપિયા  ) બિહોલા મહેન્દ્રસિંહ જુજારસિંહ આપેલ છે.",
      " જેનું કામકાજ થોડા સમયમાં પુર્ણ થશે.",
      "ખુરશી🪑- આ સિવાય મંદિર માટે ટકાઉ અને સારી ક્વૉલિટીવાળી 25 ખુરશી પણ તેમના તરફથી આપવામાં આવેલ છે"
    ],
    fund:[ "25 ખુરશી  : 12,000 અને" +' ',
      "રૂમ સંપૂર્ણ ખર્ચ : 2,51,000 "
    ],
  },
  {
    id: 4,
    description:[
     "- મંદિર માટે બિહોલા મહેન્દ્રસિંહ જુજારસિંહ નો  ભાવ હમેશા માટે બની રહ્યો છે તેના માટે સમસ્ત ગામ, વહીવટી સભ્યો અને સર્વે તરફથી આપનો અને આપના પરિવારનો ખુબ ખુબ આભાર વ્યક્ત કરીએ છીએ.",



"કુલ  : 3,34,000 ( અંકે ત્રણ લાખ ચોત્રીસ હજાર રૂપિયા પૂરા ) જેટલો સહયોગ તેમના દ્વારા કરવામાં આવ્યો છે."
    ],
    fund:[ "- કુલ દાન ",

"1. 350 ફુટ બોરવેલ ખર્ચ : 32,000 અને"+' ',
"2. મોટેર બોર્ડ અને કેબલ : 39,000 અને"+' ',
"3. રૂમનો બનાવાનો ખર્ચ  : 2,51,000 અને"+' ',
"4. 25 ખુરશી નો ખર્ચ.   : 12,000",
    ],
  },
];

const Events = () => {
  return (
    <div className="bg-yellow-400 min-h-screen flex justify-center items-center p-6 flex-col gap-6" id="events">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white drop-shadow-md">આવનાર ઇવેન્ટ્સ અને ઉત્સવ</h2>
        <p className="text-lg text-gray-100 mt-2">ધર્મિક ઉત્સવ અને પવિત્ર કાર્યક્રમોની જાણકારી</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-yellow-500 transition-transform transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/929/929564.png"
                  alt="Event Icon"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{event.name}</h3>
            </div>
            <p className="text-gray-700 font-semibold mb-2">📜 {event.description}</p>
            <p className="text-gray-700 font-semibold mb-2">📅 <span className="font-bold">{event.date}</span></p>
            <p className="text-gray-700 font-semibold">💰 {event.fund}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
