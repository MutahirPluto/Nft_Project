import React from 'react'
import styles from "./style.module.css"
import { Container, Row, Col, Accordion } from "react-bootstrap";
// import { Container, Row, Col } from "react-bootstrap";
import PLANET1 from "../images/PLANET 1.png"
import PLANET2 from "../images/PLANET 2.png"
import Astro from "../images/ASTRO.png"
import Faq_Heading from "../images/FAQ HEADING.png"


const Home = () => {
  return (
      <div className={styles.faqBackground}>
          <Container id="faq" >
       <div className={styles.faq_main_div}>
       <div  className={styles.faq_heading_div}>
           {/* <h2>FAQ</h2> */}
           <img src={Faq_Heading} />
       </div>

        <Row>
            <Col lg={3} md={3} sm={12} xs={12}>
            <div>
            <img src={PLANET2}  className={styles.planet1Img}/>
            </div>

            <div className={styles.astroImg}>
                <img src={Astro} />            
            </div>
            </Col>

            {/* <Col lg={6} md={6} sm={12} xs={12}>
            <div  className={styles.faq_heading}>
            <h4 style={{fontWeight:"900"}} >Q. WHAT ARE SLEAZY ZEBRANS ?</h4>
            <h4>Q. WHEN MINT</h4>
            <h4 >Q. IS THERE A DISCORD</h4>
            <h4>Q. WHAT ARE THE UTILIZE OF < br/> THE SLEAZY ZEBRA ECOSYSTEM ?</h4>
            <h4>Q. WHAT IS THE TOTAL SUPPLY </h4>
            <h4>Q. WHAT IS THE MINT PRIZE</h4>
           </div>
            </Col> */}

<Col lg={6} md={6} sm={12} xs={12} >
                <div class="accordion accordion-flush" id="myAccordion" style={{backgroundColor:"black"}}>
    
                <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo" className={styles.faq_btn}> 
            <button type="button" class="accordion-button" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseTwo">Q. WHAT ARE SLEAZY ZEBRANS ?</button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn}  data-bs-toggle="collapse" data-bs-target="#collapseOne">Q. WHEN MINT</button>									
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseThree">Q. IS THERE A DISCORD</button>                     
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseFour">Q. WHAT ARE THE UTILIZE OF < br/> THE SLEAZY ZEBRA ECOSYSTEM ?</button>                     
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseFive">Q. WHAT IS THE TOTAL SUPPLY </button>                     
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseSix">Q. WHAT IS THE MINT PRIZE</button>                     
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>
</div>
                </Col>
            <Col lg={3} md={3} sm={12} xs={12} >
            <div >
           
           <img src={PLANET1}   className={styles.planet2Img} />
           </div>
            </Col>
        </Row>


       
    
       
        {/* <Accordion defaultActiveKey="0" flush className="py-5">
                <Accordion.Item eventKey="0"  className={styles.accordian_item}>
                    <Accordion.Header style={{border:"1px solid red", backgroundColor:"blue"}} className="accordion-header" >
                    <h4 style={{fontWeight:"900"}} >Q. WHAT ARE SLEAZY ZEBRANS ?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    Non-Fungible Tokens are unique, easily verifiable digital assets that can represent items such as GIFs, images, videos, music albums, and more. Anything that exists online can be purchased as an NFT, theoretically. 
                    NFTs are different from cryptocurrencies because they’re not interchangeable.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why would you want to own an NFT? Can you make money on it?</Accordion.Header>
                    <Accordion.Body>
                    One reason to buy an NFT is for its emotional value, which isn’t so different from physical objects. No one buys a pair of glasses because they need it. They buy it for the way it makes them feel. The same can be true for a GIF, image, video, or other digital asset. <nr/>
                    The other reason is because you think it’s valuable...and will only increase in value. And yes, you can make money off of an NFT by buying and reselling it for more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How do you buy an NFT?</Accordion.Header>
                    <Accordion.Body>
                    You register to join a waitlist that can be thousands of fans long. When a digital asset goes on sale, you’re randomly chosen to buy it. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How do you know our NFT is authentic?</Accordion.Header>
                    <Accordion.Body>
                    NFT ownership is recorded on the blockchain, and that entry acts as a digital slip. Tokens can be scanned to confirm their authenticity. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Why should you buy our NFTs?</Accordion.Header>
                    <Accordion.Body>
                    1. Our Collection are unique because is not a copy of any other digital asset, instead is an outcome of my request mixed with the creativity of a Marketer, a Publicist and 2 different designers the have never seen each other, lives in differents countries/continents and have a completely different approach. <br/>
                    <br/>
                    2. A share of our profits from our sales will be allocated to our Creative & Designer from Ukraine, 20% of the profit will be used to sponsor the team, if enough, children will be adopted or their education sponsored.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}




            

          
          

   </div>
   </Container>
      </div>
   
  )
}

export default Home