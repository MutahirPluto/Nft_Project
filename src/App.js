import "./App.css";
import ImageSlider from "./components/ImageSlider"
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home"

import { IMAGES, VIDEOS, LARGE_IMAGES } from "./data/data";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
     <Home />
      {/* <div className='container'> */}
        {/* <ImageSlider images={LARGE_IMAGES} /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
