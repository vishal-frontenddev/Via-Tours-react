import React from "react";

const ThingsToDoCard = ({ title, image }) => {
  return (
    <div className="relative overflow-hidden rounded-xl group h-48 sm:h-56 md:h-64">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-3 left-3 text-white text-sm sm:text-base font-medium drop-shadow-lg">
        {title}
      </div>
    </div>
  );
};

export default ThingsToDoCard;