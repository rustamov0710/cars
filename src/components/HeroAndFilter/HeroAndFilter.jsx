import React from "react";

const HeroAndFilter = () => {
  return (
    <div className="mt-6">
      {/* Hero Section */}
      <section className="bg-gray-100 w-[1296px] container py-12 px-[40px] rounded-md ">
        <div className="mx-auto container flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              НОВЫЙ GEELY MONJARO!
            </h1>
            <p className="text-gray-600 mb-6 w-[400px]">
              Кроссовер Monjaro - премиальная модель Geely по уровню дизайна,
              материалов и технологий.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white px-10  py-4 hover:bg-blue-600 text-[12px] rounded "
            >
              Подробнее
            </a>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1">
            <div className="w-full h-64 flex items-center justify-center rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src="hero_car.png"
                  alt="Placeholder"
                />
  
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Подбор авто
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            {/* Filter Tabs */}
            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
                Все
              </button>
              <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
                Новые
              </button>
              <button className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
                С пробегом
              </button>
              <div className="flex items-center space-x-4 ml-auto">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>В наличии</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Под заказ</span>
                </label>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
              <select className="border border-gray-300 rounded-md px-4 py-2">
                <option>Выберите марку</option>
                <option>Geely</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2">
                <option>Выберите модель</option>
                <option>Monjaro</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2">
                <option>Страна</option>
                <option>Китай</option>
              </select>
              <input
                type="text"
                placeholder="Год"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="Цена"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button className="text-gray-500 hover:text-gray-700">
                Сбросить
              </button>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                23 Предложений
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroAndFilter;
