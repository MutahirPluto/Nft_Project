import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import teamimg1 from "../Images/teamimg1.svg"
import teamimg2 from "../Images/teamimg2.svg"
import teamimg3 from "../Images/teamimg3.svg"
import teamimg4 from "../Images/teamimg4.svg"
import team_Heading from "../images/TEAM HEADING.png"
import FOUNDER_Img from "../images/FOUNDER ICON.png"
import Artist_Img from "../images/ARTIST ICON.png"
import Development_Img from "../images/DEVELOPMENT HEAD ICON.png"
import Advisory_Img from "../images/ADVISORY HEAD ICON.png"


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
                    <div style={{backgroundColor:"#e06b04"}}   className={styles.team_card_div}>
                           
                           <div  style={{ margin:"0px auto"}}>
                              <img src={FOUNDER_Img} style={{width:"250px"}}/>
                           </div>

                               {/* <div className={styles.card_heading_div}>
                                   <h3  style={{color:"#ab692b"}}>Eyah</h3>
                                   <h6 style={{color:"white"}} >Lead Artist</h6>
                               </div> */}
                           </div>
                    </Col>

                    

                    
                </Row>

                <Row  style={{margin:"0px auto"}}>
                
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#6309b8"}}   className={styles.team_card_div}>
                           
                                    <div style={{ margin:"0px auto"}}>
                                       <img src={Artist_Img} style={{width:"200px"}}/>
                                    </div>

                                        {/* <div className={styles.card_heading_div}>
                                            <h3  style={{color:"#ab692b"}}>Eyah</h3>
                                            <h6 style={{color:"white"}} >Lead Artist</h6>
                                        </div> */}
                                    </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#78024d"}} className={styles.team_card_div}>
                           
                                    <div style={{ margin:"0px auto"}} >
                                       {/* <img src={Development_Img} style={{width:"309px"}} /> */}
                                       <img src={Advisory_Img}  style={{width:"270px"}}/>

                                    </div>

                                        {/* <div  className={styles.card_heading_div}>
                                            <h3 style={{color:"#b46096"}}>5TimesDistilled</h3>
                                            <h6 style={{color:"white"}} >Project Lead</h6> */}
                                        {/* </div> */}
                                    </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{backgroundColor:"#0b9975"}} className={styles.team_card_div} >
                           
                                    <div style={{ margin:"0px auto"}}>
                                       {/* <img src={Advisory_Img}  style={{width:"250px"}}/> */}
                                       <img src={Development_Img} style={{width:"300px"}} />

                                    </div>

                                        {/* <div className={styles.card_heading_div}>
                                            <h3 style={{color:"#18853d"}} >Evak</h3>
                                            <h6 style={{color:"white"}} >Community Manager</h6>
                                        </div> */}
                                    </div>
                    </Col>
                    
                    <Col lg={6} md={6} sm={12} xs={12} style={{margin:"0px auto"}}>
                        <div style={{backgroundColor:"#1b1f7d"}} className={styles.team_card_div}>
                           
                                    <div style={{ margin:"0px auto"}}>
                                       <img src={Advisory_Img}  style={{width:"250px"}}/>
                                    </div>

                                        {/* <div className={styles.card_heading_div}>
                                            <h3  style={{color:"#b74f63"}}>Royal Labs</h3>
                                            <h6 style={{color:"white"}} >Dev Team</h6>
                                        </div> */}
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