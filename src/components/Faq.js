import React from 'react'
import styles from "./style.module.css"
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  return (
   <Container id="faq" style={{ backgroundColor:"#161c2f"}}>
       <div className={styles.faq_main_div}>
       <div  className={styles.faq_heading_div}>
           <h2>FAQ</h2>
       </div>
       
           {/* <div  className={styles.when_mint_div}>
               <h4 >When mint?</h4>
            </div> */}
           <div  className={styles.faq_heading}>
            <h4 style={{fontWeight:"900"}} >Q. WHAT ARE SLEAZY ZEBRANS ?</h4>
            <h4>Q. WHEN MINT</h4>
            <h4 >Q. IS THERE A DISCORD</h4>
            <h4>Q. WHAT ARE THE UTILIZE OF < br/> THE SLEAZY ZEBRA ECOSYSTEM ?</h4>
            <h4>Q. WHAT IS THE TOTAL SUPPLY </h4>
            <h4>Q. WHAT IS THE MINT PRIZE</h4>

           </div>

   </div>
   </Container>
  )
}

export default Home