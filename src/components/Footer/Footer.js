import React from 'react';
import styles from "../style.module.css"
import { Container, Row, Col } from "react-bootstrap";
import footerlogo from "../../Images/footerlogo.svg"
import twitter from "../../Images/twitter.svg"

const Footer = () => {


    return (
        <div className={styles.footer_maindiv} >
           <Container>
            <div className={styles.footerLogo}>
                <img src={footerlogo} /> 
            </div>

            <div>
            <Row>
                    <Col  lg={4} md={4} sm={4} xs={4}>
                        <div  className={styles.footer_div}>
                            <h6>Marketplace</h6>
                            <p>NFTs</p>
                            <p>Art</p>
                            <p>Collections</p>
                        </div>
                    </Col>


                     <Col  lg={4} md={4} sm={4} xs={4}>
                     <div className={styles.footer_div}>
                            <h6>Community</h6>
                            <p>Blog</p>
                            <p>Community</p>
                            <p>Forum</p>
                        </div>
                    </Col>


                     <Col  lg={4} md={4} sm={4} xs={4} style={{margin:"0px auto"}}>
                     <div className={styles.footer_div}>
                            <h6>NewsLetter</h6>
                            <p>Signup for newsletter to get latest news in your inbox</p>
                            <p>Email</p>
                            <p>Access</p>
                        </div>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    )
}

export default Footer