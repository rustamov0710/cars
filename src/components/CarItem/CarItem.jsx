import React from "react";

const CarItem = ({ car }) => {
  const {
    image,
    name,
    price,
    milage,
    engine,
    drive,
    country,
  } = car;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={image[1]}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-500 text-lg font-bold">{price} $</p>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
          <li>{milage} км</li>
          <li>{engine}</li>
          <li>{drive}</li>
          <li>{country}</li>
        </ul>
      </div>
      <div className="p-4 border-t">
        <button className="text-gray-500 hover:text-red-500">
          ♥ Добавить в избранное
        </button>
      </div>
    </div>
  );
};

export default CarItem;
