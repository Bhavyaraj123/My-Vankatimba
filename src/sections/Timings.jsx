import React from "react";

const Timings = () => {
  return (
    <div className="bg-[rgb(191,61,13)] min-h-screen flex justify-center items-center p-6" id="timings">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header Section */}
        <div className="bg-yellow-400 text-black rounded-t-lg px-4 py-3 flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3658/3658999.png"
              alt="Temple"
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-2xl font-bold">રોજ ની આરતી નો સમય</h2>
        </div>

        {/* Morning Section */}
        <div className="flex items-center border-b px-4 py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
            alt="Morning"
            className="w-10 h-10"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">સવાર</p>
            <p className="text-sm">
              <span className="font-semibold">આરતી:</span> 07:30 to 08:00
            </p>
            <p className="text-sm">
              <span className="font-semibold">દર્શન:</span> 08:00 to 11:30
            </p>
          </div>
        </div>

        {/* Evening Section */}
        <div className="flex items-center border-b px-4 py-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3222/3222800.png"
            alt="Sunset"
            className="w-10 h-10"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">સાંજ</p>
            <p className="text-sm">
              <span className="font-semibold">આરતી:</span> 19:00 to 19:30
            </p>
            <p className="text-sm">
              <span className="font-semibold">દર્શન:</span> 16:00 to 21:00
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="px-4 py-3">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/69zuNluk5xA"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timings;