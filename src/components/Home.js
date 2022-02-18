import React from 'react'
import Section1 from "./Section1"
import Layout from "../components/Layout/Navbar/index"
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../data/data";
import ImageSlider from "../components/ImageSlider"
import Cards from './Cards';


// import {Slider} from "./Slider"

const Home = () => {
  return (
    <Layout>

        <Section1 />
        <Cards />
        <ImageSlider images={LARGE_IMAGES} />
       
    </Layout>
  )
}

export default Home