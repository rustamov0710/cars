import React from "react";
import './CarBrands.css'
const CarBrands = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        {/* Brand Logos Grid */}
        <ul className="list-two">
          {[
            { name: "Acura", logo: "acura-logo" },
            { name: "Honda", logo: "honda-logo" },
            { name: "Hyundai", logo: "hyundai-logo" },
            { name: "Infiniti", logo: "infiniti-logo" },
            { name: "Lexus", logo: "lexus-logo" },
            { name: "Mazda", logo: "mazda-logo" },
            { name: "Mitsubishi", logo: "mitsubishi-logo" },
            { name: "Nissan", logo: "nissan-logo" },
            { name: "Subaru", logo: "subaru-logo" },
            { name: "KIA", logo: "kia-logo" },
            { name: "Genesis", logo: "genesis-logo" },
            { name: "SsangYong", logo: "ssangyong-logo" },
            { name: "Renault", logo: "renault-logo" },
            { name: "Chevrolet", logo: "chevrolet-logo" },
            { name: "BMW", logo: "bmw-logo" },
            { name: "Mercedes", logo: "mercedes-logo" },
            { name: "Audi", logo: "audi-logo" },
          ].map((brand, index) => (
            <li
              key={index}
              className="flex flex-col items-center space-y-2 item hover:shadow-lg p-4 cursor-pointer "
            >
              <img
                src={`./${brand.logo}.png`}
                alt={`${brand.name} logo`}
                className="h-16 w-16 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">
                {brand.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Call to Action Section */}
            <div className="bg-blue-500 text-white py-8 px-6 rounded-lg mt-[50px]">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Не можете определиться с выбором?
          </h2>
          <p className="text-sm w-[383px] lg:text-base mb-6 ">
            Оставьте заявку, и наши менеджеры проконсультируют вас!
          </p>
          <button className="bg-blue-300 text-white px-9  py-4 hover:bg-blue-600 text-[12px] rounded">
            Оставить заявку
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center ml-[60px]">
          <img
            src="/photo.png" // Replace with your actual image path
            alt="Covered car"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default CarBrands;
