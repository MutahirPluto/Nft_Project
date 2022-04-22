import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./style.module.css"

import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt} style={{width:"100%", borderRadius:"20px"}} />}
          </div>
        </div>
      );
    }
    return null;
  });

  console.log("imageIndex", imageIndex)

  return(
    <div  style={{paddingTop:"7rem"}} id="rarity">

      <div className={styles.rarity_div}>
        <h1  className={styles.rarity_heading}>Rarity</h1>
        <div  className={styles.rarity_pera}>
        <h3 >Each NFT is algorithmically generated by combining 240+ unique traits</h3>
        <h3>with varying rarity across categories.</h3>
        </div>
      </div>

      <div style={{paddingBottom:"20px"}}>
        <Container>
          <Row style={{gap:"0px"}}>
            <Col lg={3} md={6} sm={12} xs={12} style={{ height:"400px",backgroundColor:"#7266ef", borderRadius:"20px"}}>
            
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}style={{ height:"400px", backgroundColor:"blue", borderRadius:"20px"}}>
            
            </Col>
            <Col lg={3} md={6} sm={12} xs={12} style={{ height:"400px", backgroundColor:"red", borderRadius:"20px"}}>
            
            </Col>
            <Col lg={3} md={6} sm={12} xs={12} style={{ height:"400px", backgroundColor:"yellow", borderRadius:"20px"}}>
            
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{marginTop:"5rem"}} className="heading">
        <h2 >New Collections</h2>
      </div>
      <div  style={{width:"70px", borderBottom:"4px solid #7266ef", margin:"0px auto", marginBottom:"40px", marginTop:"20px"}}></div>
      {/* <Container width="sm"> */}
     <div className="container-sm">
     <Slider {...settings}>{templateImages}</Slider>
     </div>
      {/* </Container> */}

    {/* <div>
    <Container  style={{marginTop:"20px", textAlign:"center"}}>
      <Row>
      <Col lg={6} md={6} sm={12} >
      <div>
      <h3>NFT Name</h3>
      </div>
      </Col>
      <Col lg={6} md={6} sm={12} >
      <div>
          {imageIndex==0? (<h1>hello</h1>) : imageIndex==1 ? (<h1>hello1</h1>) : imageIndex==2 ? (<h1>hello2</h1>): imageIndex==3 ? (<h1>hello3</h1>) :
          imageIndex==4 ? (<h1>hello4</h1>) : imageIndex==5 ? (<h1>hello5</h1>) : null
          }
    </div>
      </Col>
      </Row>
    
        
    </Container>
    </div> */}

    </div>
  );
};

export default ImageSlider;
