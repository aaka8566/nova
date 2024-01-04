import React from 'react'
import styles from "../Styles/TopInfo.module.css";
import { MdArrowOutward } from "react-icons/md";
const TopInfo = () => {
  return (
    <div className={styles.maindiv}>
        <div>
       <div>
        <div className={styles.leftfirstdiv}>
        <div>
        <h1 className={styles.heading}>All Your Business</h1>
        <h1 className={styles.heading}>Banking In One</h1>
        <h1 className={styles.heading}>Platform</h1>
        </div>
        <div className={styles.lefttext}>
            Take your business to new heights with fatser cash flow and clear financial insighs all with a nova free acout .pally in 10 minurtes.
        </div>
        <div>
        <button className={styles.leftbutton}>
          <div className={styles.navarrow1}> < MdArrowOutward/> </div>
            Get Started
        </button>
        </div>
        <div>
        <p className='lasttext'>Already Started?<span style={{color:"red",fontFamily:"sans-serif",fontSize:"0.9rem"}}>Finish your apllicatio.</span></p>
        </div>
       </div>
        </div>
        <img width={'100%'} height={'100%'} src="./human.png" alt="error" />
        </div>
        <div>
            <img src="./card2.png" alt="error" />
            <div>
          <div className={styles.navarrow}> < MdArrowOutward/> </div>
          <div className={styles.text}>
            <p>Instant Card Control</p>
            <p>Monitor all our purchasaes in one place , and freeze and utilize your card in any way.</p>
          </div>
            </div>
        </div>
    </div>
  )
}

export default TopInfo