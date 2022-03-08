import  React, {useState, useEffect} from 'react';
// import styles from "../style.css"
import { Container, Form, FormControl, Nav, Navbar, NavDropdown,  Modal, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import styles from "../../style.module.css"
import Web3Modal from "web3modal";
import { connectWallet } from "../../../utils/connectWallet";
import { useWeb3React } from "@web3-react/core";
import {injectedConnector} from "../../../utils/connectors"
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";


function PuraNavbar(props) {

  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    errorWeb3Modal,
    active: networkActive, error: networkError, activate: activateNetwork
  } = useWeb3React();

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    injectedConnector
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true)
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injectedConnector)
        }
      })
      .catch(() => {
        setLoaded(true)
      })
  }, [activateNetwork, networkActive, networkError])


    // const [loaded, setLoaded] = useState(false)
    // const [show1, setShow1] = useState(false)
    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);
    // const [address, setAddress] = useState(typeof window !== "undefined" ? localStorage.getItem("status") : "0")


    // const {
    //     connector,
    //     library,
    //     account,
    //     chainId,
    //     activate,
    //     deactivate,
    //     active,
    //     errorWeb3Modal,
    //     active: networkActive, error: networkError, activate: activateNetwork
    //   } = useWeb3React();

    //   console.log("injectedConnector", injectedConnector)

    //   useEffect(() => {
    //     injectedConnector
    //       .isAuthorized()
    //       .then((isAuthorized) => {
    //         setLoaded(true)
    //         if (isAuthorized && !networkActive && !networkError) {
    //           activateNetwork(injectedConnector)
    //         }
    //       })
    //       .catch(() => {
    //         setLoaded(true)
    //       })
    //   }, [activateNetwork, networkActive, networkError])


   

    // useEffect(() => {
    //     (async () => {
    //       if (account && library) {
    //         try {
    //             await axios.post("http://localhost:5000/api/admin/add", {
    //                 address: account
    //               })
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }
    //     })();
    //   }, [account,library]);



    //   const logout = () => {
    //     setAddress("0")
    //     handleClose1()
        
    //   }
    //   if(typeof window !== "undefined"){

    //     localStorage.setItem("status", address);
    // }
     
    
    //   const disconnect = () => {
    //     handleShow1()
    //   }

    // console.log("networkError", networkError)

  return (
    <div className={styles.navbar_main_div} >
        

{/* {
          networkError?
          <div className="text-center">
          <span className={styles.error}>{networkError.toString()}</span>
          </div>
       :null
        } */}



<div  className={styles.custom_header}>  
{
          networkError?
          <div className="text-center">
          <span className={styles.network_err}>{networkError.toString()}</span>
          </div>
       :null
        }
<Navbar  expand="lg" className='fixed-top'  style={{backgroundColor:"#161c2f", borderBottom:"4px solid #445382"}} >
  
  <BrowserRouter>
    <Container  >
    <HashLink to="/#">
      <img className={styles.logo} src='https://d27zc942lqnax5.cloudfront.net/tbones/navbar/nav-tasty-bone-icon.svg'  height={80} />
      </HashLink>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        // style={{ maxHeight: '100px', color:"white", flex:"0.3", justifyContent:"space-between", border:"1px solid red", margin:"0px auto"}}
        navbarScroll
        id={styles.nav}
      >
          <HashLink to="/#rarity">
        <p className={styles.navLink}  >Rarity</p>
          </HashLink>
         <HashLink to="/#categories">
        <p className={styles.navLink}  >Categories</p>
          </HashLink>
          <HashLink to="/#roadmap">
        <p className={styles.navLink}  >Roadmap</p>
          </HashLink>
        <HashLink to="/#faq">
        <p className={styles.navLink}  >Faq</p>
          </HashLink>
          <HashLink to="/#team">
        <p className={styles.navLink}  >Team</p>
          </HashLink>
          <HashLink to="/page#section-three">
        <p className={styles.navLink}  >Shop</p>
          </HashLink>
      </Nav>
      {/* <Form className="d-flex" > */}
         {/* {
          //  networkError?<button type="button" className="btn-custom secondary-btn">Connect Wallet</button>:
           active && address ==  "1"
            ? (<div>
              
              <Button  onClick={disconnect} >Disconnect</Button>
                  <Button   >Connected</Button>
              </div>)
             : (
             <div><Button color="inherit" onClick={() => {
              connectWallet(activate, props.setErrorMessage);
              connect()
              setAddress("1")
            }} >Connect</Button>
             
            </div>
            ) 
         } */}

         {/* <button>
             Connect
         </button> */}

         {
           networkError?<button type="button" className="btn-custom secondary-btn">Connect Wallet</button>:
           active 
            ? (<div>
              
              <button className={styles.explore_btn} >Connected</button>
              {/* <button type="button" className="btn-custom secondary-btn">{shortAddress}</button> */}
              </div>)
             : (
             <div><button onClick={() => {
              connectWallet(activate);
            }} type="button" className={styles.explore_btn}>Connect Wallet</button>
             
            </div>

            // <div><button onClick={loadProvider} type="button" className="btn-custom secondary-btn">Connect Wallet</button>
             
            //  </div>
            ) 
         }

                       

                       
        
      {/* </Form> */}
    </Navbar.Collapse>
  </Container >
  </BrowserRouter>

</Navbar>

</div>

    </div>
  );
}
export default PuraNavbar;