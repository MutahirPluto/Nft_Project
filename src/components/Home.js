import React from 'react'
import Section1 from "./Section1"
import { LARGE_IMAGES } from "../data/data";
import ImageSlider from "../components/ImageSlider"
import Cards from './Cards';
import Roadmap from "../components/Roadmap"
import Faq from "../components/Faq"
import Team from "../components/Team"
import Footer from './Footer/Footer';
import Mint from './Mint';
import styles from "./style.module.css"





const Home = () => {
  return (
    <div>

        <Section1 />
        <Cards />
        <Mint />
        <ImageSlider images={LARGE_IMAGES} />
        <Roadmap />
        <div className={styles.faqBackground}>
        <Faq />
        <Team />
        </div>
        <Footer />
        
    </div>
  )
}

export default Home