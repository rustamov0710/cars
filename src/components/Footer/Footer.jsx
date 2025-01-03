import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and Info */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold text-blue-600">YouCar</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-vk"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              №1 автоброкер<br />
              Внесем качественные изменения в Вашу жизнь
            </p>
          </div>

          {/* Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="font-semibold text-gray-700 mb-2">Компания</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-blue-600">Каталог</a></li>
              <li><a href="#" className="hover:text-blue-600">О нас</a></li>
              <li><a href="#" className="hover:text-blue-600">Новости</a></li>
              <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
              <li><a href="#" className="hover:text-blue-600">Избранные</a></li>
            </ul>
          </div>

          {/* Cars by Regions */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="font-semibold text-gray-700 mb-2">Автомобили</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-blue-600">Из Европы</a></li>
              <li><a href="#" className="hover:text-blue-600">Из США</a></li>
              <li><a href="#" className="hover:text-blue-600">Из ОАЭ</a></li>
              <li><a href="#" className="hover:text-blue-600">Из Китая</a></li>
              <li><a href="#" className="hover:text-blue-600">Из Кореи</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-semibold text-gray-700 mb-2">Марки</h3>
            <ul className="text-sm text-gray-600 grid grid-cols-2 gap-2">
              {["Audi", "BMW", "Cherry", "Daewoo", "Fiat", "Ford", "Aston Martin", "Baic", "Cadillac", "Datsun", "Acura", "Byd", "Changan", "Dodge", "GAC", "Alfa Romeo", "Bentley", "Chevrolet", "EXEED", "Geely"].map((brand, index) => (
                <li key={index}><a href="#" className="hover:text-blue-600">{brand}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 flex flex-wrap justify-between items-center text-sm text-gray-500 border-t pt-4">
          <p>Политика конфиденциальности</p>
          <p>Сделано в UserTech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
