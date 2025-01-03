import React from 'react'
import Header from '../Header/Header'
import HeroAndFilter from '../HeroAndFilter/HeroAndFilter'
import Catalog from '../Catalog/Catalog'
import WhyUs from '../WhyUs/WhyUs'
import AboutUs from '../About/About'
import NewsAndReviews from '../NewsAndReviews/NewsAndReviews'
import CarBrands from '../CarBrands/CarBrands'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    {/* <Header/> */}
    <HeroAndFilter/>
    <Catalog/>
    <WhyUs/>
    <AboutUs/>
    <CarBrands/>
    {/* <NewsAndReviews/> */}
    {/* <Footer/> */}
    </>
  )
}

export default Home