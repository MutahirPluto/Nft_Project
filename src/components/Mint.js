import React, { useState } from 'react';
import styles from "./style.module.css"


const Mint = () => {

    const [count, setCount]= useState(0)

    const countPlus= () => {
        if(count >= 0 ){
            setCount(count + 1)
        }
    }

    const countMinus = () => {
        if(count == 1 || count > 0) {
            setCount(count-1)
        }
    }

  return (
    <div  className={styles.mint_main_div} style={{border:"1px solid #495899"}}>
        <div style={{textAlign:"center",  width:"50%",padding:"40px 0px 40px 0px" ,margin:"100px auto",  borderRadius:"10px"}} className={styles.mint_background}>
            <div>
                <p style={{color:"red", fontSize:"100px", fontWeight:"bolder"}}>{count}</p>
            </div>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <div className={styles.btn_plus_div} onClick={countPlus}>
                    {/* <button style={{padding:"10px 30px 10px 30px", fontSize:"35px", backgroundColor:"#377cca", color:"white", ontWeight:"bolder"}}>+</button> */}
                </div>
                <div className={styles.btn_minus_btn} onClick={countMinus}>
                    {/* <button style={{padding:"10px 30px 10px 30px", fontSize:"40px", backgroundColor:"#377cca", color:"white", fontWeight:"bolder"}}>-</button> */}
                </div>

            </div>

            <div className={styles.mint_btn}>
        {/* <button style={{padding:"10px 30px 10px 30px", backgroundColor:"#a17ff6", textAlign:"center", color:"white",fontWeight:"bolder", fontSize:"20px", borderRadius:"10px", outline:"none", border:"none"}}>
                MINT
        </button> */}
        </div>
        </div>
        
       
        
    </div>
  )
}

export default Mint