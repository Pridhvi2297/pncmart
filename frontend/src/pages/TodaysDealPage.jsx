import React from 'react'
import Header from '../components/Layout/Header'
import ExclusiveDealsCard from '../components/TodaysDeal/ExclusiveDealsCard'
import Footer from '../components/Layout/Footer'

const TodaysDealPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <div className="flex-grow flex flex-col items-center justify-center">
        <ExclusiveDealsCard active={true} />
        <ExclusiveDealsCard active={true} />
      </div>
      <Footer />
    </div>
  )
}

export default TodaysDealPage
