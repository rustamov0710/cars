import React from "react";

const Filter = () => {
    return < section className="bg-white py-12" >
        <div className="container mx-auto px-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">
                Подбор авто
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                {/* Filter Tabs */}
                <div className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
                    <input id="all" type="radio" name="statement" />
                    <label htmlFor="all" className="px-4 py-2 rounded-md bg-blue-500 text-white" >
                        Все
                    </label>

                    <input id="new" type="radio" name="statement" />
                    <label htmlFor="new" className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
                        Новые
                    </label>

                    <input id="used" type="radio" name="statement" />
                    <label htmlFor="used" className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">
                        С пробегом
                    </label>
                    <div className="flex items-center space-x-4 ml-auto">
                        <label className="flex items-center space-x-2">
                            <input name="rate" type="radio" className="form-checkbox" />
                            <span>В наличии</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input name="rate" type="radio" className="form-checkbox" />
                            <span>Под заказ</span>
                        </label>
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
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
    </ section>
};

export default Filter;
