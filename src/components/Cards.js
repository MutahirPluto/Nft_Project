import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import About_Heading from "../images/ABOUT HEADING.png"



const Cards = () => {
  return (
    <div className={styles.card_mainDiv} id="my-cool-section">
        <Container>
            <div >
                <div style={{ textAlign:"center"}}>
                <img src={About_Heading} style={{width:"300px", backgroundColor:"transparent"}} />
                </div>
                <p className={styles.about_text} >SELAZY ZEBRAS ARE A COLLECTION OF 4444 UNSTABLE ZEBRAS <br/> LIVING ON THE ETHEREUM BLOCKCHAIN.<br /> THE AIH 
                    FOR THIS PROJECT IS TO CREATE A BRAND WHICH ALLOWS<br/> YOU TO EMBRACE YOUR SLEAZE.<br />
                    WE ALL HAVE OURS FLAWS BUT WHAT MATTERS IS WHO WE<br /> ARE AFTER THE FACT. WHICH IS WHY WE CREAETED A PROJECT FOR 
                    EVERYONE! WE<br/> ACT AS A BRIDGE BETWEEN WEB3 AND THE SCUZZY PHYSICAL WORLD TO BRING<br /> EXCLUSSIVE REAL LIFE
                    AND DIGITAL BENIFITS WITH ACCESS TO OUR ECO SYSTEM
                </p>
                <Row>
                    <Col  lg={6} md={6} sm={12} style={{marginTop:"30px", margin:"30px auto"}} >
                        <div className={styles.card_div}>
                            

                        </div>
                    </Col>


                     
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Cards