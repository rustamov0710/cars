import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="">
      <div className="container px-4 border-t pt-6 ">
        <div className="flex ">
          {/* Logo and Info */}
          <div className="w-[313px] mr-[86px] mb-4 sm:mb-0">
          <a href="/" className="text-2xl font-bold text-blue-600">
          <img src="./YouCar.svg" alt="logo" />
          </a>
          <div className="flex items-center space-x-4 mt-6">
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
            <p className="text-[12px] text-gray-800 mt-2 ">
            © 1-й автоброкер <br/>
            Внесём качественные изменения в Вашу жизнь!
            </p>
          </div>

          {/* Links */}
          <div className="w-[89px] mb-4 mr-[80px] sm:mb-0">
            <h3 className="font-semibold text-gray-700 mb-2">Компания</h3>
            <ul className="text-sm text-gray-600 space-y-1 gap-6">
              <li><a href="#" className="hover:text-blue-600">Каталог</a></li>
              <li><a href="#" className="hover:text-blue-600">О нас</a></li>
              <li><a href="#" className="hover:text-blue-600">Новости</a></li>
              <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
              <li><a href="#" className="hover:text-blue-600">Избранные</a></li>
            </ul>
          </div>

          {/* Cars by Regions */}
          <div className="w-[103px] mb-4 mr-[80px] sm:mb-0">
            <h3 className="font-semibold text-gray-700 mb-2">Автомобили</h3>
            <ul className="text-sm text-gray-600 space-y-1 gap-6">
              <li><a href="#" className="hover:text-blue-600">Из Европы</a></li>
              <li><a href="#" className="hover:text-blue-600">Из США</a></li>
              <li><a href="#" className="hover:text-blue-600">Из ОАЭ</a></li>
              <li><a href="#" className="hover:text-blue-600">Из Китая</a></li>
              <li><a href="#" className="hover:text-blue-600">Из Кореи</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="w-[545px] sm:w-1/5">
            <h3 className="font-semibold text-gray-700 mb-2">Марки</h3>
            <ul className="list-three">
                <li className="flex items-start flex-col gap-2">
                  <a href="#" className="w-[100px] hover:text-blue-600">Audi</a>
                  <a href="#" className="w-[100px] hover:text-blue-600">Aston Martin</a>
                  <a href="#" className="w-[100px] hover:text-blue-600">Acura</a>
                  <a href="#" className="w-[100px] hover:text-blue-600">Alfa Romeo</a>
                  <a href="#" className="w-[100px] hover:text-blue-600">Avatr</a>
                  </li>
                <li className="flex items-start flex-col gap-2">
                  <a href="#" className="hover:text-blue-600">BMW</a>
                  <a href="#" className="hover:text-blue-600">Baic</a>
                  <a href="#" className="hover:text-blue-600">Byd</a>
                  <a href="#" className="hover:text-blue-600">Bently</a>
                  <a href="#" className="hover:text-blue-600">Chery</a>
                  </li>
                <li className="flex items-start flex-col gap-2">
                  <a href="#" className="hover:text-blue-600">Chery</a>
                  <a href="#" className="hover:text-blue-600">Cadillac</a>
                  <a href="#" className="hover:text-blue-600">Changan</a>
                  <a href="#" className="hover:text-blue-600">Chevrolet</a>
                  <a href="#" className="hover:text-blue-600">Citroen</a>
                  </li>
                <li className="flex items-start flex-col gap-2">
                  <a href="#" className="hover:text-blue-600">Daewoo</a>
                  <a href="#" className="hover:text-blue-600">Datsun</a>
                  <a href="#" className="hover:text-blue-600">Dodge</a>
                  <a href="#" className="hover:text-blue-600">EXEED</a>
                  <a href="#" className="hover:text-blue-600">Ferrari</a>
                  </li>
                <li className="flex items-start flex-col gap-2">
                  <a href="#" className="hover:text-blue-600">Fiat</a>
                  <a href="#" className="hover:text-blue-600">Ford</a>
                  <a href="#" className="hover:text-blue-600">GAC</a>
                  <a href="#" className="hover:text-blue-600">Geely</a>
                  <a href="#" className="hover:text-blue-600">Genesis</a>
                  </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 mb-3 flex justify-between items-center text-sm text-gray-500 pt-4 pl-[355px]">
          <p>Политика конфиденциальности</p>
          <p>Сделано в UserTech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
