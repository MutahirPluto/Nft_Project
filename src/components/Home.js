import React from 'react'
import Section1 from "./Section1"
import Layout from "../components/Layout/Navbar/index"
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../data/data";
import ImageSlider from "../components/ImageSlider"
import Cards from './Cards';
import Categories from "../components/Categories"
import Roadmap from "../components/Roadmap"
import Faq from "../components/Faq"
import Team from "../components/Team"
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Mint from './Mint';



// import {Slider} from "./Slider"

const Home = () => {
  return (
    <div>

        <Section1 />
        <Cards />
        <Mint />
        <ImageSlider images={LARGE_IMAGES} />
        {/* <Categories /> */}
        <Roadmap />
        <Faq />
        <Team />
        <Footer />
    </div>
  )
}

export default Home