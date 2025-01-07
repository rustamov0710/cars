import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isOpen);
  };

  return (
    <header className="shadow-md">
      {/* Top Bar */}
      <div className="hidden md:flex bg-gray-100 text-gray-600 text-sm">
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
          
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            <img src="./YouCar.svg" alt="logo" />
          </a>

<div className="relative md:hidden">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 4.707l4.707 4.707a1 1 0 01-1.414 1.414l-4.707-4.707A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  </span>
  <input
    type="text"
    placeholder="Поиск по названию"
    className="text-[13px] border border-gray-300 rounded bg-gray-100 px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
    aria-label="Search"
  />
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
           
<div className="relative w-[300px]">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 4.707l4.707 4.707a1 1 0 01-1.414 1.414l-4.707-4.707A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  </span>
  <input
    type="text"
    placeholder="Поиск по названию"
    className="border border-gray-300 rounded w-full bg-gray-100 px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
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

      {/* Mobile Menu Section */}
      {isOpen && (
        <div className="border-t border-gray-300 shadow-md py-4 px-4">
          <nav className="space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-500">Главная</a>
            <a href="#catalog" className="block text-gray-700 hover:text-blue-500">Каталог</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-500">О нас</a>
            <a href="#news" className="block text-gray-700 hover:text-blue-500">Новости</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500">Контакты</a>
          </nav>

          <div className="mt-6 space-y-4">
            <ul className="flex items-center flex-col gap-4">
              <li className="block w-full bg-gray-100 p-3 rounded hover:bg-gray-300 flex items-center"> <a href="#">Автомобили</a><span className="text-blue-500">{`>`}</span></li>
              <li className="block w-full bg-gray-100 p-3 rounded hover:bg-gray-300 flex items-center"> <a href="#">Коммерческий транспорт</a><span className="text-blue-500">{`>`}</span></li>
              <li className="block w-full bg-gray-100 p-3 rounded hover:bg-gray-300 flex items-center"> <a href="#">Мотоциклы</a><span className="text-blue-500">{`>`}</span></li>
            </ul>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-gray-600">+7 (777) 777-77-77</p>
            <p className="text-gray-600">info@mail.ru</p>
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
          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Регистрация</button>
            <button className="w-full bg-gray-300 text-gray-700 py-2 rounded mt-2 hover:bg-gray-400">Войти</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
