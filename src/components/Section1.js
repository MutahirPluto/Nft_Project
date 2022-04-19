import React, {useState} from "react";
import styles from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import NftImg from "../Images/nft.png";


const Section1 = () => {

  // function handleClick() {
  //   history.push("/Shop");
  // }


  return (
    <div  style={{height:"100%"}}>
      {/* <Container  >
        <div >
        
              <div  className={styles.Pera_Img}>
                  <div className={styles.pera}><h1>Create, sell or collect digital items</h1></div>
                  <div style={{display:"flex"}}><img src={NftImg} width='100%' /></div>
              </div>
          
         
          
        </div>
      </Container> */}



      <Container>
        <div style={{paddingTop:"140px"}}>
        <Row  >
          <Col lg={6} md={6} sm={12} >
              <div  className={styles.textMain_div}>
                  <div><h1>Create, sell or collect</h1></div>
                  <div><h1>digital items.</h1></div>
                  <p  className={styles.pera}>Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
                  <button className={styles.explore_btn} >Explore</button>
              </div>
          
          </Col>
          <Col lg={6} md={6} sm={12}  className={styles.nft_Image}>
          <img src={NftImg} width='100%' />
          </Col>
        </Row>
        </div>
      </Container>

      
      
     

      {/* <div
      className={styles.Carousel}
      style={{ width: "80%", height: "500px", margin: "20px auto", textAlign:"center" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* <div  > */}
      {/* <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      /> */} 

    {/* <Container  style={{marginTop:"20px"}}>
      <Row>
      <Col lg={6} md={6} sm={12} >
      <div>
      <h3>NFT Name</h3>
      </div>
      </Col>
      <Col lg={6} md={6} sm={12} >
      <div>
          {state.goToSlide==0? (<h1>hello</h1>) : state.goToSlide==1 ? (<h1>hello1</h1>) : state.goToSlide==2 ? (<h1>hello2</h1>): state.goToSlide==3 ? (<h1>hello3</h1>) :
          state.goToSlide==4 ? (<h1>hello4</h1>) : state.goToSlide==5 ? (<h1>hello5</h1>) : state.goToSlide==6 ? (<h1>hello6</h1>) : state.goToSlide==7 ? (<h1>hello7</h1>) : null
          }
    </div>
      </Col>
      </Row>
    
        
    </Container> */}
    {/* </div> */}
          
    </div>
  );
};

export default Section1;
