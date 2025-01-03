import React from "react";

const Header = () => {
  return (
    <header className="shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 container">
        <nav className="flex space-x-6">
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
          <div className="flex items-center space-x-4">
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
            <span>+7 (777) 777-77-77</span>
            <span>info@mail.ru</span>
            <div className="flex items-center space-x-1">
              <span>RU</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 ">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
          <img src="./YouCar.svg" alt="logo" />
          </a>

          {/* Navigation Links */}

          {/* Search and Buttons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по названию"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <a href="#login" className="text-gray-700 hover:text-blue-500">
              Войти
            </a>
            <a
              href="#register"
              className="bg-blue-500 text-white px-9  py-4 hover:bg-blue-600 text-[12px] rounded"
            >
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
