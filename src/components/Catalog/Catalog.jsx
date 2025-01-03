import React, { useState, useEffect } from "react";
import axios from "axios";
import CarItem from "../CarItem/CarItem";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.youcarrf.ru/cars");
        setCars(response.data.slice(1, 7)); // Take only the first 6 items
      } catch (err) {
        setError("Failed to fetch cars data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(cars);
  

  if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Автомобильный каталог</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
      <div className="text-right mt-6">
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
