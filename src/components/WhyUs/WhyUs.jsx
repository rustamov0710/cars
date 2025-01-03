import React from "react";

const WhyUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-10">
          Почему мы?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 flex justify-center lg:justify-start">
              <img src="/key.svg" alt="Работаем под ключ" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">
              Работаем под ключ
            </h3>
            <p className="text-gray-600 text-center lg:text-left">
              У нас вы можете приобрести автомобиль напрямую у официального
              автодилера, без посредников и перевозчиков.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 flex justify-center lg:justify-start">
              <img src="/sms.svg" alt="Онлайн-чат 24/7" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">
              Онлайн-чат 24/7
            </h3>
            <p className="text-gray-600 text-center lg:text-left">
              Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с
              выбором.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 flex justify-center lg:justify-start">
              <img
                src="/carcheck.svg"
                alt="Упрощенный выбор авто"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">
              Упрощенный выбор авто
            </h3>
            <p className="text-gray-600 text-center lg:text-left">
              Мы создали этот сайт, чтобы сделать поиск автомобиля по вашим
              критериям максимально простым и удобным.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 flex justify-center lg:justify-start">
              <img src="/car.svg" alt="Доставка" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">
              Доставка
            </h3>
            <p className="text-gray-600 text-center lg:text-left">
              Поставка в любой регион РФ, прямая связь без посредников.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
