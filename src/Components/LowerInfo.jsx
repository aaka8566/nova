import React from 'react'
import styles from "../Styles/LowerInfo.module.css";
import { MdArrowOutward } from "react-icons/md";
const LowerInfo = () => {
  return (
    <div className={styles.maindiv}>
        <div className={styles.leftdiv}>

    <div className={styles.lefttopdiv}>
    <div><h1>Online banking</h1>
    <h1>That Takes Your</h1>
    
    </div>
    <div className={styles.leftarrow}>< MdArrowOutward/></div>
        </div> 


        <div className={styles.leftdown}>
    <div>
       <div>
       <h1>Business To The</h1>
    <h1>Next Level</h1>
        </div> 
        <div>
        Monistor all your purchases in one place andfreze unfreeze your card in minutes.
        </div>
        </div>       

<div>
<img className={styles.leftimage} src="human2.png" alt="error" />
</div>
</div> 

        </div>
        <div></div>
    </div>
  )
}

export default LowerInfo