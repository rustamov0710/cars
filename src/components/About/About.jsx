import React from "react";
import './About.css'
const AboutUs = () => {
  return (
    <div className="bg-gray-100 rounded-md  container  w-[1276px] h-[395px] py-16 px-5">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section */}
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 -mt-[65px]">
  {/* Background Blue Blocks */}
  <img
    src="/lines.png"
    alt="Lines"
    className="absolute top-0 left-0 z-0 w-[336px] h-[388px]"
  />
  {/* Main Image */}
  <img
    src="/boy.png"
    alt="Man with a car"
    className="relative z-10 w-[308px] h-[442px] mx-auto lg:mx-0 -mt-12"
  />
</div>



        {/* Right Section */}
        <div className="lg:w-1/2 text-center lg:text-left right-section">
          <h2 className="text-2xl font-bold mb-4">О нашей компании</h2>
          <p className="text-gray-600 mb-6">
            Мы имеем огромный опыт работы с автомобильным рынком Кореи и
            тщательно отбираем автомобили для наших клиентов, учитывая их
            потребности и бюджет. Мы работаем только с надёжными поставщиками и
            перевозчиками, чтобы обеспечить безопасность и надёжность доставки.
          </p>
          <button className="bg-blue-500 text-white px-9  py-4 hover:bg-blue-600 text-[12px] rounded">
            Связаться с нами
          </button>
        </div>



        {/* <div className="flex items-center space-x-4">
          <div className="w-[250px] h-[134px] flex items-center justify-center">
            <img
              src="/wheels.png" // Placeholder for tire image
              alt="Tire"
              className="w-[250px] h-[134px]"
            />
          </div>
          <div className="w-[155px] h-[158px] flex items-center justify-center">
            <img
              src="/n1.png" // Placeholder for tire image
              alt="Tire"
              className="w-[155px] h-[158px]"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
