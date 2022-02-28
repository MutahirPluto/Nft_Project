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
       
           <div  className={styles.when_mint_div}>
               <h4 >When mint?</h4>
            </div>
           <div  className={styles.faq_heading}>
            <p>Presale: 13th Feb 2022 at 2PM UTC</p>
            <p>Raffle: 14th Feb 2022 at 6PM UTC</p>
           </div>

           <div  className={styles.when_mint_div}>
               <h4 >How Much</h4>
            </div>
           <div  className={styles.faq_heading}>
            <p>0.069 ETH</p>
           </div>

           <div  className={styles.when_mint_div}>
               <h4 >How many can I mint?</h4>
            </div>
           <div  className={styles.faq_heading}>
            <p>Presale: 2 max mint per account; eligible members are</p>
            <p>those given WL roles and free mints</p>
            <p  style={{marginTop:"2rem"}}>Raffle: 1 max mint per account; eligible members are</p>
            <p>those with verified discord accounts</p>
           </div>

           <div  className={styles.when_mint_div}>
               <h4 >Do i own the IP of the minted NFT?</h4>
            </div>
           <div  className={styles.faq_heading}>
            <p>Yes. Holding each Tasty Bones NFT comes with the rights</p>
            <p>to create and distribute derivatives. Read more on the</p>
            <p><a href='https://google.com' >those with verified discord accounts</a></p>
           </div>

           <div  className={styles.when_mint_div}>
               <h4 >Is your smart contract gas efficient?</h4>
            </div>
           <div  className={styles.faq_heading}>
            <p>Yes. We use ERC-721A.</p>
           </div>
   </div>
   </Container>
  )
}

export default Home