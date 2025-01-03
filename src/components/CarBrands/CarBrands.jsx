import React from "react";

const CarBrands = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Brand Logos Grid */}
        <div className="grid grid-cols-4 gap-6">
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
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:bg-white shadow-sm p-4 rounded-lg cursor-pointer"
            >
              <img
                src={`/logos/${brand.logo}.png`}
                alt={`${brand.name} logo`}
                className="h-16 w-16 object-contain"
              />
              <span className="text-sm font-medium text-gray-700">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-10 bg-blue-500 text-white p-6 rounded-lg text-center">
          <h2 className="text-lg font-semibold">
            Не можете определиться с выбором?
          </h2>
          <p className="mt-2 text-sm">
            Оставьте заявку, и наши менеджеры проконсультируют вас!
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-medium rounded shadow hover:bg-gray-200">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBrands;
