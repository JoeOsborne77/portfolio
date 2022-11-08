import React from 'react'
import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Experience from "./components/experience/experience"
import Footer from "./components/footer/footer"
import Portfolio from "./components/portfolio/portfolio"
import Services from "./components/services/services"
import Testimonial from "./components/testimonial/testimonial"



const App = () => {
  return (
    <>
    <Header />
    <About />
    <Contact />
    <Experience />
    <Footer />
    <Nav />
    <Portfolio />
    <Services />
    <Testimonial />
    </>

  )
}

export default App