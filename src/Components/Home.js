import React from 'react'
import Introduction from './Introduction'
import Testimonial from './Testimonial'
import WeeklySpecial from './WeeklySpecial'
import HomeAbout from './homeAbout'

const Home = () => {
  return (
    <>
    {/* Little Lemon and Book Table Introduction */}
    <Introduction />
    {/* Weekly Special */}
    <WeeklySpecial />
    {/* Testimonial*/}
    <Testimonial />
    {/* About */}
    <HomeAbout />
    </>
  )
}

export default Home