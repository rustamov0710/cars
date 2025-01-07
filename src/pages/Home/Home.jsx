import React from 'react'
import Header from '../../components/Header/Header'
import Catalog from '../../components/Catalog/Catalog'
import WhyUs from '../../components/WhyUs/WhyUs'
import AboutUs from '../../components/About/About'
import NewsAndReviews from '../../components/NewsAndReviews/NewsAndReviews'
import CarBrands from '../../components/CarBrands/CarBrands'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Filter from '../../components/Filter/Filter'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Filter />
      <Catalog />
      <WhyUs />
      <AboutUs />
      <CarBrands />
      <NewsAndReviews /> */}
      <Footer />
    </>
  )
}

export default Home