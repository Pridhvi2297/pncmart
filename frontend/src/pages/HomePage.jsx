import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import Deals from "../components/Route/Deals/Deals";
import BestSellers from "../components/Route/BestSellers/BestSellers";
import TodaysDeal from "../components/TodaysDeal/TodaysDeal";
import Sellers from "../components/Route/Sellers";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Deals />
        <TodaysDeal /> {/*Events*/}
        <Categories />
        <BestSellers /> {/*FeaturedProducts*/}
        <Sellers /> {/* Sponsored */}
        <Footer />
    </div>
  )
}

export default HomePage