import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
import Wallet from "../Images/wallet.svg"
import Add from "../Images/add.svg"
import Sell from "../Images/sell.svg"


const Cards = () => {
  return (
    <div className={styles.card_mainDiv}>
        <Container>
            <div >
                <Row>
                    <Col  lg={4} md={6} sm={12} style={{marginTop:"30px"}}>
                        <div className={styles.card_div}>
                            <div className={styles.card_2nd_div}>
                            <img src={Wallet}  />
                            <h5>Set up your wallet</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                            </div>

                        </div>
                    </Col>


                     <Col  lg={4} md={6} sm={12} style={{marginTop:"30px"}}>
                        <div className={styles.card_div}>
                            <div className={styles.card_2nd_div}>
                            <img src={Add} />
                            <h5>Add your NFT's</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                            </div>

                        </div>
                    </Col>


                     <Col  lg={4} md={6} sm={12} style={{marginTop:"30px"}}>
                        <div className={styles.card_div}>
                            <div className={styles.card_2nd_div}>
                            <img src={Sell} />
                            <h5>Sell your NFT's</h5>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                            </p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Cards