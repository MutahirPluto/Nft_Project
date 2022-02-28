import React from "react";
import roadmap from "../Images/roadmap1.svg";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
// import {Slider} from "./Slider"

const Home = () => {
  return (
    <div className={styles.roadmap_img_div} id="roadmap">
        <div >
          {/* <Row> */}
            {/* <Col > */}
              <div className={styles.roadmap_heading_div}>
                <h3>Tasty Roadmap</h3>
              </div>
      <Container>
                <img src={roadmap} width="100%"/>
      </Container>
            {/* </Col> */}
          {/* </Row> */}
        </div>
    </div>
  );
};

export default Home;
