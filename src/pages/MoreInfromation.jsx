import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const MoreInfromation = ({allitems}) => {
  return (
    <div>
      <Header />
      <div className="more-info">
        <img src={allitems.img} alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default MoreInfromation
