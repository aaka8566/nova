import React from 'react'
import styles from "../Styles/NavbarStyles.module.css"
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
const navmenu=["Business Checking","Solution","Resources","Results","Contacts"]
const Navbar = () => {
  return (
    <div className={styles.navdiv}>

{/* first div */}
    <div>
    <CiGlobe />
<p>novã</p>
    </div>
{/* first div */}


{/* second div */}
    <div className={styles.navmenu}>
{navmenu.map((el,i)=>(
<div key={i}>
<p>{el}</p>
<IoIosArrowDown />
</div>
))}
    </div>
{/* second div */}

{/* third div */}   
    <div>
        <div>Log In</div>
        <button>
          <div className={styles.navarrow}> < MdArrowOutward/> </div>
            Get Started
        </button>
    </div>
{/* third div */}
    
    </div>
  )
}

export default Navbar