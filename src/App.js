import "./App.css";
// import ImageSlider from "./components/ImageSlider"
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home"

import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
// import {BrowserRouter as Router} from "react-router-dom"
import Cards from "./components/Cards"
import Categories from "./components/Categories"
import Faq from "./components/Faq"
import ImageSlider from "./components/ImageSlider"
import Team from "./components/Team"
import Layout from "./components/Layout/Navbar/index"
import { HashLink } from "react-router-hash-link";





function App() {
  return (
    <div >
      <Home />
     {/* <BrowserRouter> */}
     {/* <HashLink to="/my-cool-page#my-cool-section">Goto Cool Section</HashLink> */}

{/* <div id="my-cool-section"  style={{marginTop:"400px"}}>The coolest</div> */}
    {/* <Home /> */}
    
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/card" element={<Cards />} />
          <Route path="/image" element={<ImageSlider images={LARGE_IMAGES} />}/>
          <Route path="/catogery" element={<Categories />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/team" element={<Team/>}/>
          
        </Routes> */}
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
