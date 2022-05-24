import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import catogeryimg1 from "../Images/catogeryimg1.svg"
import catogeryimg2 from "../Images/catogeryimg2.svg"
import catogeryimg3 from "../Images/catogeryimg3.svg"
import catogeryimg4 from "../Images/catogeryimg4.svg"
import catogeryimg5 from "../Images/catogeryimg5.svg"
import catogeryimg6 from "../Images/catogeryimg6.svg"
import catogeryimg7 from "../Images/catogeryimg7.svg"
import { HashLink } from "react-router-hash-link";



const Home = () => {
  return (
    <div id="categories" style={{ paddingTop:"7rem"}}>
       
        <Container>
            <div className={styles.Categories_main_div}>
                <h3>Trait Categories</h3>
            </div>

            <div  className={styles.catogeries_main_div}>
            <Row style={{marginTop:"2rem"}} >
          <Col lg={3} md={4} sm={6} xs={6} >
            <div className={styles.catogeries_card} style={{backgroundColor:"#c5c6fe"}}>
                    <Row  >
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>71</h3>
                                <h6>Body</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg1} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div className={styles.catogeries_card} style={{backgroundColor:"#60c694"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>53</h3>
                                <h6>Headwear</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg2} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div  className={styles.catogeries_card} style={{backgroundColor:"#e49d88"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>40</h3>
                                <h6>Food Offering</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg3} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div  className={styles.catogeries_card} style={{backgroundColor:"#4599ef"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>35</h3>
                                <h6>Eyewear</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg4} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div  className={styles.catogeries_card} style={{backgroundColor:"#e58eca"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>26</h3>
                                <h6>HJead</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg5} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div  className={styles.catogeries_card} style={{backgroundColor:"#76a6fe"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>20</h3>
                                <h6>Background</h6>
                            </div>
                        </Col>

                        <Col lg={7} md={6} sm={6} xs={6}>
                                <img src={catogeryimg6} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6}  >
          <div  className={styles.catogeries_card} style={{backgroundColor:"#69e28e"}}>
                    <Row>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <div>
                                <h3>6</h3>
                                <h6>Nose</h6>
                            </div>
                        </Col>

                        <Col lg={8} md={6} sm={6} xs={6}>
                                <img src={catogeryimg7} width="100%" height="130px" />
                        </Col>
                    </Row>
            </div>
          </Col>
        </Row>
            </div>
        </Container>
    </div>    
  )
}

export default Home