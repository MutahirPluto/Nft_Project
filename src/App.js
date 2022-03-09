import "./App.css";
// import ImageSlider from "./components/ImageSlider"
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home"

import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";
import Footer from "./components/Footer/Footer";
// import {BrowserRouter as Router} from "react-router-dom"
import Cards from "./components/Cards"
import Categories from "./components/Categories"
import Faq from "./components/Faq"
import ImageSlider from "./components/ImageSlider"
import Team from "./components/Team"
import Layout from "./components/Layout/Navbar/PureNavbar"
import { HashLink } from "react-router-hash-link";
import Section1 from "./components/Section1"
import Roadmap from "./components/Roadmap"
import Navbar from "./components/Layout/Navbar/PureNavbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from "./components/Shop";





function App() {
  return (
    <div >       
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route e path="/" element={<Home /> } />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
