import React from 'react'
import styles from "./style.module.css"
import { Container, Row, Col } from "react-bootstrap";
import PLANET1 from "../images/PLANET 1.png"
import PLANET2 from "../images/PLANET 2.png"
import Astro from "../images/ASTRO.png"
import Faq_Heading from "../images/FAQ HEADING.png"
import when_mint_btn from "../images/when_mint_btn.png"
import button2 from "../images/button2.png"
import button3 from "../images/button3.png"
import button4 from "../images/button4.png"
import button5 from "../images/button5.png"
import button6 from "../images/button6.png"


const Home = () => {
  return (
      <div>
          <Container id="faq" >
       <div className={styles.faq_main_div}>
       <div  className={styles.faq_heading_div}>
           <img src={Faq_Heading} />
       </div>

        <Row style={{marginTop:"2rem"}}>
            <Col lg={3} md={3} sm={12} xs={12}>
            <div>
            <img src={PLANET2}  className={styles.planet1Img}/>
            </div>

            <div className={styles.astroImg}>
                <img src={Astro} />            
            </div>
            </Col>

            

<Col lg={6} md={6} sm={12} xs={12} >
                <div class="accordion accordion-flush" id="myAccordion" style={{backgroundColor:"black"}}>
    
                <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo" className={styles.faq_btn}> 
            <button type="button" class="accordion-button" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                <img src={when_mint_btn} />
                </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn}  data-bs-toggle="collapse" data-bs-target="#collapseOne">
            <img src={button2} />
            </button>									
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseThree">
            <img src={button3} />    
            </button>                     
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseFour">
            <img src={button4} />    
            </button>                     
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseFive">
            <img src={button5} />    
            </button>                     
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
            <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
            </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree" className={styles.faq_btn}>
            <button type="button" class="accordion-button collapsed" className={styles.faq_btn} data-bs-toggle="collapse" data-bs-target="#collapseSix">
            <img src={button6} />    
            </button>                     
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


       
    
       
        




            

          
          

   </div>
   </Container>
      </div>
   
  )
}

export default Home