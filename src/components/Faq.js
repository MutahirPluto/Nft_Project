import React from 'react'
import styles from "./style.module.css"
import { Container, Row, Col } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
import PLANET1 from "../Images/PLANET1.png"
import PLANET2 from "../Images/PLANET2.png"


const Home = () => {
  return (
      <div className={styles.faqBackground}>
          <Container id="faq" >
       <div className={styles.faq_main_div}>
       <div  className={styles.faq_heading_div}>
           <h2>FAQ</h2>
       </div>

        <Row>
            <Col lg={3} md={3} sm={12} xs={12}>
            <div >
            {/* <img src={PLANET1}  className={styles.planet_img}/> */}
            </div>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
            <div  className={styles.faq_heading}>
            <h4 style={{fontWeight:"900"}} >Q. WHAT ARE SLEAZY ZEBRANS ?</h4>
            <h4>Q. WHEN MINT</h4>
            <h4 >Q. IS THERE A DISCORD</h4>
            <h4>Q. WHAT ARE THE UTILIZE OF < br/> THE SLEAZY ZEBRA ECOSYSTEM ?</h4>
            <h4>Q. WHAT IS THE TOTAL SUPPLY </h4>
            <h4>Q. WHAT IS THE MINT PRIZE</h4>
           </div>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12} >
            <div >
           {/* <img src={PLANET1} className={styles.planet_img} /> */}
           </div>
            </Col>
        </Row>
       
           {/* <div  className={styles.when_mint_div}>
               <h4 >When mint?</h4>
            </div> */}

           

          
          

   </div>
   </Container>
      </div>
   
  )
}

export default Home