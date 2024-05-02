import React from 'react'
import Navbar from '../../navbar/Navbar'
import Homeheroheader from '../../homeheroheader/Homeheroheader'
import Homecard from '../../homecards/Homecard'
import Footer from '../../footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Homeheroheader/>
        <Homecard/>
        <Footer/>
    </div>
  )
}

export default Home