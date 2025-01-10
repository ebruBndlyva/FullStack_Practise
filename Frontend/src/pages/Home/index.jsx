import React from "react";
import style from "./style.module.css";
import bgImg from "../../assets/header-img.png.webp";
import img1 from "../../assets/s1.jpg.webp";
import { FaRegUser } from "react-icons/fa";
function Home() {
  return (
    <div className={style.main}>
      <div className={style.hero}>
        <div className="content">
          <div className={style.hero_desc}>
            <span>Process Visa without within hours</span>
            <h2>
              Immigrations & <br /> Visa Consultation
            </h2>
            <button>Book Consultancy</button>
          </div>
        </div>
        <div className={style.hero_img}>
          <img src={bgImg} alt="bgImg" />
        </div>
      </div>
      <div className={style.immgr}>
        <div className="content">
          <div className={style.immgr_wrapper}>
            <div className={style.immgr_head}>
              <h2>Requirements to be Immigrants</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={style.immgr_cards}>
              <div className={style.immgr_card}>
                <div className={style.immgr_card_img}>
                  <img src={img1} alt="cardImg" />
                </div>
                <div className={style.immgr_card_desc}>
                  <span>United States</span>
                  <h3>Addiction When Gambling Becomes A Problem</h3>
                  <p>
                    inappropriate behavior ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.features}>
        <div className="content">
          <div className={style.features_wrapper}>
          <div className={style.immgr_head}>
              <h2>Our Unique Features that can impress you</h2>
              <p>
              Who are in extremely love with eco friendly system.
              </p>
            </div>
            <div className={style.features_cards}>
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div>
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div> 
              <div className={style.features_card}>
                <div className={style.features_card_head}>
                <span><FaRegUser /></span>
                <h3>Expert Technicians</h3>
                </div>
                <div className={style.features_card_desc}>
                  <p>
                  Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.hero}></div>
    </div>
  );
}

export default Home;
