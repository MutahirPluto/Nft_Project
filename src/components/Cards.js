import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import Wallet from "../Images/wallet.svg"
import Add from "../Images/add.svg"
import Sell from "../Images/sell.svg"
import cloud from "../Images/cloud.jpg"
import abouttext from "../Images/abouttext.png"



const Cards = () => {
  return (
    <div className={styles.card_mainDiv} id="my-cool-section">
        <Container>
            <div >
                <h2 className={styles.aboutHeading}>ABOUT</h2>
                {/* <img src={abouttext} height="200px" width="300px" /> */}
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


                     {/* <Col  lg={4} md={6} sm={12} style={{marginTop:"30px"}}>
                        <div className={styles.card_div}>
                            <div className={styles.card_2nd_div}>
                            <img src={Add} />
                            <h5>Add your NFT's</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                            </div>

                        </div>
                    </Col>


                     <Col  lg={4} md={6} sm={12} style={{marginTop:"30px"}}>
                        <div className={styles.card_div}>
                            <div className={styles.card_2nd_div}>
                            <img src={Sell} />
                            <h5>Sell your NFT's</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                            </div>

                        </div>
                    </Col> */}
                </Row>
            </div>
            {/* <img src={cloud} style={{ width:"100%", backgroundColor:"transparent"}}/> */}
        </Container>
    </div>
  )
}

export default Cards