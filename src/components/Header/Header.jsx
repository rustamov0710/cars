import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500">
              Главная
            </a>
            <a href="#catalog" className="text-gray-700 hover:text-blue-500">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              О нас
            </a>
            <a href="#news" className="text-gray-700 hover:text-blue-500">
              Новости
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="hover:text-blue-500">
                <img src="./vk.svg" alt="vk" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <img src="./whatsup.svg" alt="whatsup" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <img src="./instagram.svg" alt="instagram" />
              </a>
            </div>
            <span className="hidden md:block">+7 (777) 777-77-77</span>
            <span className="hidden md:block">info@mail.ru</span>
          </div>
          {/* Burger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            <img src="./YouCar.svg" alt="logo" />
          </a>

          {/* Main Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <a href="#" className="hover:text-blue-500 hover:underline">
                Автомобили
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:underline">
                Коммерческий транспорт
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 hover:underline">
                Мотоциклы
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Поиск по названию"
              className="border border-gray-300 rounded-md bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              className="mx-6 hover:cursor-pointer"
              src="./bell.png"
              alt="bell"
            />
            <a href="#login" className="text-gray-700 hover:text-blue-500">
              Войти
            </a>
            <a
              href="#register"
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded"
            >
              Регистрация
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full h-5/6 shadow-md p-6 relative">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="mt-8 space-y-4">
              <a
                href="#home"
                className="block text-gray-700 hover:text-blue-500 text-lg"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="block text-gray-700 hover:text-blue-500 text-lg"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-blue-500 text-lg"
              >
                О нас
              </a>
              <a
                href="#news"
                className="block text-gray-700 hover:text-blue-500 text-lg"
              >
                Новости
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-500 text-lg"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
