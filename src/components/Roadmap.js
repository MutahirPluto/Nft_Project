import React from "react";
import roadmap from "../Images/roadmap1.svg";
import roadmap1 from "../Images/roadmap.jpeg"
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css"

const Home = () => {
  return (
    <div className={styles.roadmap_img_div} id="roadmap">
        <div >

              <div className={styles.roadmap_heading_div}>
                <h3>Tasty Roadmap</h3>
              </div>
      <Container>
                <img src={roadmap1} width="100%"/>
      </Container>

        </div>
    </div>
  );
};

export default Home;
