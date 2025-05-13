import React from "react";

const itineraryData = [
  { day: "Day 1", title: "Airport Pick Up" },
  { day: "Day 2", title: "Temples & River Cruise" },
  {
    day: "Day 3",
    title: "Massage & Overnight Train",
    description:
      "Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.",
  },
  { day: "Day 4", title: "Khao Sok National Park" },
  { day: "Day 5", title: "Travel to Koh Phangan" },
  { day: "Day 6", title: "Morning Chill & Muay Thai Lesson" },
  { day: "Day 7", title: "Island Boat Trip" },
];

const ItinerarySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Itinerary Header */}
      <h2 className="text-2xl font-bold text-slate-900">Itinerary</h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-dotted border-orange-400 pl-6 space-y-8">
        {itineraryData.map((item, index) => (
          <div key={index} className="relative">
            {/* Circle */}
            <span
              className={`absolute -left-3 top-1 w-4 h-4 rounded-full ${
                index === 0 || index === itineraryData.length - 1
                  ? "bg-orange-500"
                  : "border-2 border-orange-400 bg-white"
              }`}
            ></span>

            {/* Title + Desc */}
            <h4 className="font-semibold text-slate-800">
              {item.day}: {item.title}
            </h4>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1 max-w-lg">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Tour Map */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tour Map</h2>
        <div className="w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.277763821812!2d144.963058!3d-37.814217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3df7b5d%3A0x2b2ec50b1dbdf1f5!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1629445705535!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ItinerarySection;
