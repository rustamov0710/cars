import React from "react";

const NewsAndReviews = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Новости</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card */}
            {[...Array(3)].map((_, index) => (
              <li
                key={index}
                className="bg-white rounded-lg list-none shadow-md overflow-hidden"
              >
                <img
                  src="news.png"
                  alt="News"
                  className="w-full h-[280px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">
                    Сравнение японских и немецких автомобилей: что лучше?
                  </h3>
                  <p className="text-gray-600 mb-1">
                    С начала весны 2022 года российский автомобильный рынок
                    подвергся...
                  </p>
                  <a
                    href="#"
                    className="font-medium text-[14px] underline"
                  >
                    Подробнее →
                  </a>
                </div>
              </li>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Отзывы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review Card */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/yandex.png"
                    alt="Yandex"
                    className="w-10 h-10 mr-4"
                  />
                  <div className="mr-[130px]">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 text-sm">Яндекс </p>
                      <img src="./yan.svg" alt="yandex" />
                    </div>
                    <h4 className="text-lg font-semibold">Александра</h4>
                    <p className="text-gray-500 text-sm">Апрель 2024</p>
                  </div>
                  <span className="text-yellow-500 font-bold">★★★★★</span>
                </div>
                <p className="text-gray-600 mb-4 flex-1">
                  Я очень доволен покупкой машины в данном автосалоне. Все
                  сотрудники были приветливы и готовы помочь на каждом этапе
                  выбора и приобретения авто...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndReviews;
