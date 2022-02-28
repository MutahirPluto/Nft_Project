import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import teamimg1 from "../Images/teamimg1.svg"
import teamimg2 from "../Images/teamimg2.svg"
import teamimg3 from "../Images/teamimg3.svg"
import teamimg4 from "../Images/teamimg4.svg"


const Team = () => {
  return (
    <div    className={styles.team_main_div} id="team">
        <Container>
            <div className={styles.team_div}>
                <h2>Team</h2>
            </div>

            <div>
                <Row  style={{margin:"0px auto"}}>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#f5c58f"}}   className={styles.team_card_div}>
                           
                                    <div >
                                       <img src={teamimg1} />
                                    </div>

                                        <div className={styles.card_heading_div}>
                                            <h3  style={{color:"#ab692b"}}>Eyah</h3>
                                            <h6 style={{color:"white"}} >Lead Artist</h6>
                                        </div>
                                    </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#f8d3ef"}} className={styles.team_card_div}>
                           
                                    <div >
                                       <img src={teamimg2} />
                                    </div>

                                        <div  className={styles.card_heading_div}>
                                            <h3 style={{color:"#b46096"}}>5TimesDistilled</h3>
                                            <h6 style={{color:"white"}} >Project Lead</h6>
                                        </div>
                                    </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#69e28e"}} className={styles.team_card_div}>
                           
                                    <div >
                                       <img src={teamimg3} />
                                    </div>

                                        <div className={styles.card_heading_div}>
                                            <h3 style={{color:"#18853d"}} >Evak</h3>
                                            <h6 style={{color:"white"}} >Community Manager</h6>
                                        </div>
                                    </div>
                    </Col>
                    
                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                        <div style={{backgroundColor:"#f3b4c4"}} className={styles.team_card_div}>
                           
                                    <div >
                                       <img src={teamimg4} />
                                    </div>

                                        <div className={styles.card_heading_div}>
                                            <h3  style={{color:"#b74f63"}}>Royal Labs</h3>
                                            <h6 style={{color:"white"}} >Dev Team</h6>
                                        </div>
                                    </div>
                    </Col>
                    {/* <Col lg={4} md={6} sm={12} xs={12} >
                    <div className={styles.catogeries_card} style={{backgroundColor:"#c5c6fe"}}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                        <img src={teamimg1}/>
                                    </div>
                                </Col>

                                <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <h3></h3>
                                            <h6></h6>
                                        </div>
                                </Col>
                            </Row>
                         </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} >
                    <div className={styles.catogeries_card} style={{backgroundColor:"#c5c6fe"}}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                        <img src={teamimg1}/>
                                    </div>
                                </Col>

                                <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <h3></h3>
                                            <h6></h6>
                                        </div>
                                </Col>
                            </Row>
                         </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12} >
                    <div className={styles.catogeries_card} style={{backgroundColor:"#c5c6fe"}}>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                        <img src={teamimg1}/>
                                    </div>
                                </Col>

                                <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <h3></h3>
                                            <h6></h6>
                                        </div>
                                </Col>
                            </Row>
                         </div>
                    </Col> */}
                </Row>
            </div>
        </Container>
    </div>
    )
}

export default Team