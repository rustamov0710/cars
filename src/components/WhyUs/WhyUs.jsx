import React from "react";

const WhyUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-start mb-10">Почему мы?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="mb-4">
              <img src="/path-to-your-icon/key-icon.svg" alt="Работаем под ключ" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Работаем под ключ</h3>
            <p className="text-gray-600">
              У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и перевозчиков.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-start">
            <div className="mb-4">
              <img src="/path-to-your-icon/chat-icon.svg" alt="Онлайн-чат 24/7" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Онлайн-чат 24/7</h3>
            <p className="text-gray-600">
              Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-start">
            <div className="mb-4">
              <img src="/path-to-your-icon/car-icon.svg" alt="Упрощенный выбор авто" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Упрощенный выбор авто</h3>
            <p className="text-gray-600">
              Мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-start">
            <div className="mb-4">
              <img src="/path-to-your-icon/delivery-icon.svg" alt="Доставка" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Доставка</h3>
            <p className="text-gray-600">
              Поставка в любой регион РФ, прямая связь без посредников.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
