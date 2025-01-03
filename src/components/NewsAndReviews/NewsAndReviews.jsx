import React from "react";

const NewsAndReviews = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* News Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Card */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src="/path-to-your-images/news-image.jpg"
                  alt="News"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Сравнение японских и немецких автомобилей: что лучше?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    С начала весны 2022 года российский автомобильный рынок
                    подвергся...
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Подробнее →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Отзывы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review Card */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/path-to-your-images/yandex-logo.png"
                    alt="Yandex"
                    className="w-10 h-10 mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">Александра</h4>
                    <p className="text-gray-500 text-sm">Апрель 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-1">
                  Я очень доволен покупкой машины в данном автосалоне. Все
                  сотрудники были приветливы и готовы помочь на каждом этапе
                  выбора и приобретения авто...
                </p>
                <div className="flex items-center">
                  <span className="text-yellow-500 font-bold">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndReviews;
