import React from "react";

const CarItem = ({ car }) => {
  const {
    image,
    mark,
    cost,
    milage,
    engine,
    drive,
    country,
    checkpoint,
    horsepower,
    volume,
    model,
  } = car;
console.log(car);

  return (
    <li class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
    <img
      class="w-full h-48 object-cover"
      src={image[1]}
      alt={mark}
    />
    <div class="p-4">
      <h2 class="text-lg text-gray-800">
        {mark} {model}
      </h2>
      <p class="text-xl font-bold text-gray-900 mt-2">${cost}</p>
      <div class="text-sm text-gray-600 mt-2 flex gap-9">
        <div className="">
        <p>{milage} км</p>
        <p>{volume}/{horsepower} л.с./{engine}</p>
        <p>{country}</p>

        </div>
        <div className="">
        <p>{drive}</p>
        <p>{checkpoint}</p>

        </div>
      </div>
      <button
        class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Подробнее
      </button>
    </div>
  </li>
  
  );
};

export default CarItem;
