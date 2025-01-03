import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
          {/* Background Blue Blocks */}
          <div className="absolute top-0 left-0 bg-blue-500 w-16 h-32 lg:w-20 lg:h-40 transform translate-x-4 translate-y-4"></div>
          <div className="absolute top-0 left-16 bg-blue-500 w-16 h-48 lg:w-20 lg:h-56 transform translate-x-8 translate-y-8"></div>
          <div className="absolute top-0 left-32 bg-blue-500 w-16 h-24 lg:w-20 lg:h-32 transform translate-x-12 translate-y-12"></div>

          {/* Main Image */}
          <img
            src="/path-to-your-images/man-image.png"
            alt="Man with a car"
            className="relative z-10 w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4">О нашей компании</h2>
          <p className="text-gray-600 mb-6">
            Мы имеем огромный опыт работы с автомобильным рынком Кореи и
            тщательно отбираем автомобили для наших клиентов, учитывая их
            потребности и бюджет. Мы работаем только с надёжными поставщиками и
            перевозчиками, чтобы обеспечить безопасность и надёжность доставки.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
