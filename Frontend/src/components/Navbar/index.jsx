import React from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.png.webp"
import { BsTelephone } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {Link} from "react-router-dom"

function Navbar() {
  return (
  
      <div className={style.Navbar}>
        <div className={style.Navbar_top}>
        <div className="content">
          <div className={style.Navbar_top_wrapper}>
          <div className={style.Navbar_top_desc}>
            <p>We believe we helps people <br /> for happier lives</p>
          </div>
          <div className={style.Navbar_top_logo}>
            <img src={logo} alt="logoImg" />
          </div>
          <div className={style.Navbar_top_contact}>
            <a className={style.Navbar_contact_tel} href="#">+880 123 12 658 439</a>
            <div className={style.Navbar_contact_icon}>
            <BsTelephone />
            </div>
          </div>
         <div className={style.Navbar_bar} >
         <FaBars />
         </div>
          </div>
        </div>
   
      </div>
      <div className={style.Navbar_link}>
         
           <ul >
                <li><Link href="">Home</Link></li>
                <li><Link href="">About</Link></li>
                <li><Link href="">Immigration</Link></li>
                <li><Link href="">Course</Link></li>
                <li><Link href="">Country</Link></li>
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Favorite</Link></li>
                <li><Link href="">Add</Link></li>

            </ul>
         
        </div>
    </div>
  );
}

export default Navbar;
