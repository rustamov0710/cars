import React, { useState, useEffect } from "react";
import axios from "axios";
import CarItem from "../CarItem/CarItem";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.youcarrf.ru/cars");
        setCars(response.data.slice(1, 7));
      } catch (err) {
        setError("Failed to fetch cars data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        Автомобильный каталог
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
      <div className="text-center lg:text-right mt-6">
        <a
          href="#"
          className="text-blue-500 hover:underline inline-flex items-center"
        >
          Перейти в каталог &rarr;
        </a>
      </div>
    </section>
  );
};

export default Catalog;
