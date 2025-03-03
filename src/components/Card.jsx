import React from "react";

const Card = () => {
  const cards = [
    {
      title: "શ્રી ક્ષેમકલ્યાણી માતાજી મંદિર  ",
      image: "/images/insider.jpg",
      description: [
        "શ્રી ક્ષેમકલ્યાણી માતાજી નું પવિત્ર મંદિર અરવલ્લી જિલ્લામાં, વાંકાટીંબા ગામમાં સ્થિત છે. આ મંદિર અરવલ્લીની ગિરિમાળા અને પ્રકૃતિના સાનિધ્યમાં વસેલું છે, જે ગામની શોભામાં વધારો કરે છે અને શ્રદ્ધાળુઓ માટે ભક્તિ અને સમર્પણનું કેન્દ્ર બની  રહ્યું છે.",
        "ગામના સભ્યોના સહયોગ અને ભક્તિભાવથી, મંદિરનું નવીનીકરણ કરવામાં આવ્યું, જેમાં ગામજનોના તહેઇલથી ભંડોળ એકત્રિત કરીને મંદિરના ઐતિહાસિક અને ધાર્મિક મહત્વને ઉજાગર કરાયું.",
        "તા. 21/05/2025 ના રોજ શ્રી ક્ષેમકલ્યાણી માતાજી ના મંદિરના પ્રાણ પ્રતિષ્ઠા વિધિ અને નવચંડી હવન ભવ્ય રીતે સંપન્ન કરવામાં આવ્યું. આ પાવન પ્રસંગે વાંકાટીંબા ગામના બિહોલા રાજપૂત પરિવારો, ગામની દીકરીઓ અને અન્ય શ્રદ્ધાળુઓએ ભક્તિભાવપૂર્વક હાજરી આપી હતી.",
      ],
    },
    {
      title: "સિધ્ધનાથ મહાદેવ મંદિર",
      image: "/images/shiv.jpg",
      description: [
        "તા. 21/05/2023 ના રોજ વાંકાટીંબા ગામમાં સિદ્ધનાથ મહાદેવ મંદિર નું નવનિર્માણ પૂર્ણ થયા બાદ ભવ્ય પ્રાણ પ્રતિષ્ઠા સમારોહ યોજાયો.",
        "આ પવિત્ર મંદિર કરણસિંહ મોહબ્બતસિંહ ના સ્વખર્ચે નિર્માણ પામ્યું છે, જે સમગ્ર ગામ માટે એક મહત્વપૂર્ણ ધાર્મિક અને સાંસ્કૃતિક ઉપકાર છે.",
        "આ મંદિર શંકર ભગવાનના આશીર્વાદ થી ગામની શોભામાં વધારો કરી રહ્યું છે અને ભક્તોના માટે શ્રદ્ધા અને આસ્થાનું કેન્દ્ર બની રહ્યું છે.",
        "આ પવિત્ર પ્રસંગે બિહોલા રાજપૂત પરિવારો, ગામની દીકરીઓ અને આસપાસના ગામોના અગ્રણીઓએ ઉત્સાહભેર ભાગ લીધો હતો. સમગ્ર ગામ ભક્તિમય અને હર્ષોઉલ્લાસમય વાતાવરણમાં રંગાઈ ગયું હતું.",
      ],
    },
  ];

  return (
    <div className="bg-yellow-400 py-24 px-6" id="temple">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-red-600">{card.title}</h2>
              {card.description.map((para, idx) => (
                <p key={idx} className="text-gray-700 mt-2 text-xl font-medium">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
