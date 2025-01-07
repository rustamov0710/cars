import React from "react";

const Hero = () => {
  return (
    <div className="mt-6">
      {/* Hero Section */}
      <section className="bg-gray-100 container max-w-full lg:max-w-[1296px] py-12 px-6 lg:px-[40px] rounded-md">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              НОВЫЙ GEELY MONJARO!
            </h1>
            <p className="text-gray-600 mb-6 w-full lg:w-[400px] mx-auto lg:mx-0">
              Кроссовер Monjaro - премиальная модель Geely по уровню дизайна,
              материалов и технологий.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white px-6 lg:px-10 py-3 lg:py-4 hover:bg-blue-600 text-sm lg:text-[12px] rounded"
            >
              Подробнее
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1">
            <div className="w-full h-48 lg:h-64 flex items-center justify-center rounded-md">
              <img
                className="w-full h-full object-cover"
                src="hero_car.png"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
