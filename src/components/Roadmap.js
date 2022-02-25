import React from "react";
import roadmap from "../Images/roadmap.svg";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"
// import {Slider} from "./Slider"

const Home = () => {
  return (
    <div>
      <Container>
        <div></div>
        <div className={styles.roadmap_img_div}>
          {/* <Row> */}
            {/* <Col > */}
                <img src={roadmap}  width="100%"  />
            {/* </Col> */}
          {/* </Row> */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
