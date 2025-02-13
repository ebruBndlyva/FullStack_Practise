import React, { useContext } from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.png.webp"
import { BsTelephone } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom"
import { FavoriteContext } from "../../context/FavoriteContext";

function Navbar() {
  let { favoriteData } = useContext(FavoriteContext)
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
          <li><NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? "#f6214b" : "black" })} >Home</NavLink></li>
          <li><Link>About</Link></li>
          <li><Link >Immigration</Link></li>
          <li><Link >Course</Link></li>
          <li><Link >Country</Link></li>
          <li><Link >Blog</Link></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "#f6214b" : "black" })} to={"/favorite"} >Favorite <span>({favoriteData.length})</span> </NavLink></li>
          <li><NavLink style={({ isActive }) => ({ color: isActive ? "#f6214b" : "black" })} to={"/add"} >Add</NavLink></li>

        </ul>

      </div>
    </div>
  );
}

export default Navbar;
