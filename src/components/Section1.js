import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NftImg from "../Images/headingtext.png";
// import styles from "../style.css"
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import styles from "../../src/components/style.module.css";
import Web3Modal from "web3modal";
import { connectWallet } from "../../src/utils/connectWallet";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../../src/utils/connectors";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/HEADER 2.png"
import Heading from "../images/HEADING TEXT.png"
import PLANE1 from "../images/PLANE1.png"


import { Link } from "react-router-dom";





const Section1 = () => {


  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    errorWeb3Modal,
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    injectedConnector
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injectedConnector);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [activateNetwork, networkActive, networkError]);



  return (
   <div>
















      <div   className={styles.section1MainDiv}>



      <div className={styles.navbar_main_div}>

<div className={styles.custom_header}>
  {networkError ? (
    <div className="text-center">
      <span className={styles.network_err}>
        {networkError.toString()}
      </span>
    </div>
  ) : null}
  <Navbar
    expand="lg"
    className="navbar-fixed-top"
    style={{
      // backgroundColor: "#161c2f",
      // borderBottom: "4px solid #445382",
    }}
  >
    <Container>
      <HashLink to="/#">
        <img
          className={styles.logo}
          // src="https://d27zc942lqnax5.cloudfront.net/tbones/navbar/nav-tasty-bone-icon.svg"
          src={Logo}
          height={80}
        />
      </HashLink>
      <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white"}} />
      <Navbar.Collapse id="navbarScroll"  >
        <Nav
          className="me-auto my-2 my-lg-0"
          navbarScroll
          id={styles.nav}
        >
          <HashLink to="/#my-cool-section" className={styles.hash_link}>
            <p className={styles.navLink}>About</p>
          </HashLink>

          <HashLink to="/#rarity" className={styles.hash_link}>
            <p className={styles.navLink}>Rarity</p>
          </HashLink>

          <HashLink to="/#roadmap" className={styles.hash_link}>
            <p className={styles.navLink}>Roadmap</p>
          </HashLink>
          <HashLink to="/#faq" className={styles.hash_link}>
            <p className={styles.navLink}>Faq</p>
          </HashLink>

          <HashLink to="/#team" className={styles.hash_link}>
            <p className={styles.navLink}>Team</p>
          </HashLink>
          
          <Link to="/shop" target="_blank" className={styles.hash_link}>
            <p className={styles.navLink}>Shop</p>
          </Link>
        </Nav>
        

        {networkError ? (
          <button type="button" className="btn-custom secondary-btn">
            Connect <br/> Wallet
          </button>
        ) : active ? (
          <div>
            <button className={styles.explore_btn}>Connected</button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                connectWallet(activate);
              }}
              type="button"
              className={styles.explore_btn}
            >
              Connect <br/> Wallet
            </button>
          </div>

          
        )}

      </Navbar.Collapse>
    </Container>
  </Navbar>
</div>









</div>




    <Container style={{paddingTop:"0px"}} className={styles.section1container}>
    <div className={styles.plane_div}>
          <img src={PLANE1} style={{ width:"200px"}} />
        </div>
      <div >
      <Row  >
        
        <Col lg={12} md={12} sm={12} >
            <div  className={styles.textMain_div}>
                {/* <div ><h1 style={{fontWeight:"bolder", color:"red", fontSize:"75px"}}>SLEAZY <br />ZEBRAS</h1></div> */}
                <img src={Heading} style={{width:"60%"}}  />
                {/* <div><h1>digital items.</h1></div> */}
                {/* <div ><img src={NftImg} style={{border:"1px solid red"}} /></div> */}
               
                {/* <button className={styles.explore_btn} >Explore</button> */}
            </div>
        
        </Col>
       
      </Row>
      </div>
    </Container>

    
    
   

    
        
  </div>
   </div>
  );
};

export default Section1;
