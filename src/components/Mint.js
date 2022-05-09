import React from 'react';
import styles from "./style.module.css"


const Mint = () => {
  return (
    <div style={{border:"1px solid white"}} className={styles.mint_main_div}>
        <div style={{textAlign:"center",  width:"50%",padding:"40px 0px 40px 0px" ,margin:"100px auto", backgroundColor:"#eadb9e", borderRadius:"10px"}}>
            <div>
                <p style={{color:"red", fontSize:"100px", fontWeight:"bolder"}}>1</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <div >
                    <button style={{padding:"10px 30px 10px 30px", fontSize:"35px", backgroundColor:"#377cca", color:"white", ontWeight:"bolder"}}>+</button>
                </div>
                <div>
                    <button style={{padding:"10px 30px 10px 30px", fontSize:"40px", backgroundColor:"#377cca", color:"white", fontWeight:"bolder"}}>-</button>
                </div>

            </div>
        </div>
        <div style={{textAlign:"center"}}>
        <button style={{padding:"10px 30px 10px 30px", backgroundColor:"#a17ff6", textAlign:"center", color:"white",fontWeight:"bolder", fontSize:"20px", borderRadius:"10px", outline:"none", border:"none"}}>
                MINT
        </button>
        </div>
       
        
    </div>
  )
}

export default Mint