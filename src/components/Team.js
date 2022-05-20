import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import teamimg1 from "../images/founder.png"
import teamimg2 from "../images/nimtor.png"
import teamimg3 from "../images/dvisor.png"
import teamimg4 from "../images/coder.png"
import teamimg5 from "../images/rtist.png"
import team_Heading from "../images/TEAM HEADING.png"
// import FOUNDER_Img from "../images/FOUNDER ICON.png"
// import Artist_Img from "../images/ARTIST ICON.png"
// import Development_Img from "../images/DEVELOPMENT HEAD ICON.png"
// import Advisory_Img from "../images/ADVISORY HEAD ICON.png"


const Team = () => {
  return (
    <div    className={styles.team_main_div}  id="team">
        {/* <div id={styles.sunImg}>

</div> */}
        <Container>
            <div className={styles.team_div}>
                <img src={team_Heading} />
                {/* <h2>Team</h2> */}
            </div>

            

            <div id={styles.sunImg}>
            
                <Row style={{margin:"0px auto"}}>
                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                    <div    className={styles.team_card_div}>
                           
                           <img src={teamimg1} />
                            
                           </div>
                    </Col>

                    

                    
                </Row>

                <Row  style={{margin:"0px auto"}}>
                
                <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                    <div    className={styles.team_card_div}>
                           
                           <img src={teamimg2} />
                            
                           </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                    <div    className={styles.team_card_div}>
                           
                           <img src={teamimg3} />
                            
                           </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                    <div    className={styles.team_card_div}>
                           
                           <img src={teamimg4} />
                            
                           </div>
                    </Col>
                    
                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                    <div    className={styles.team_card_div}>
                           
                           <img src={teamimg5} />
                            
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