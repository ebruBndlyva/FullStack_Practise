import React from "react";
import style from "./style.module.css";
import bgImg from "../../assets/header-img.png.webp";
import img1 from "../../assets/s1.jpg.webp";
import blog1 from "../../assets/b1.jpg.webp"
import blog2 from "../../assets/b2.jpg.webp"
import { FaRegUser } from "react-icons/fa";
import { useGetCountryDataQuery } from "../../Redux/services/CountryApi";
function Home() {
  let { data, isLoading, refetch } = useGetCountryDataQuery()
  console.log(data);
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
              {
                isLoading ? (<h2>...Loading</h2>) : (
                  data.map(item => (
                    <div key={item._id} className={style.immgr_card}>
                      <div className={style.immgr_card_img}>
                        <img src={item.image} alt="cardImg" />
                      </div>
                      <div className={style.immgr_card_desc}>
                        <span>{item.country}</span>
                        <h3>{item.title ? item.title.slice(0, 10) : "No Title"}...</h3>
                        <p>{item.description ? item.description.slice(0, 15) : "No Description"}...</p>
                      </div>
                    </div>
                  ))
                )
              }
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
      <div className={style.blog}>
        <div className="content">
          <div className={style.blog_wrapper} >
            <div className={style.blog_head} >
              <h2>Latest News from our Blog
              </h2>
              <p>Latest News from our Blog
              </p>
            </div>
            <div className={style.blog_cards} >
              <div className={style.blog_card} >
                <div className={style.blog_card_img} >
                  <img src={blog1} alt="blogImg" />
                </div>
                <div className={style.blog_card_desc} >
                  <div className={style.blog_card_work}>
                    <span>Travel</span>
                    <span>Life Style</span>
                  </div>
                  <h3>Portable lates Fashion for young women</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  <span>31st January, 2018</span>
                </div>
              </div>
              <div className={style.blog_card} >
                <div className={style.blog_card_img} >
                  <img src={blog2} alt="blogImg" />
                </div>
                <div className={style.blog_card_desc} >
                  <div className={style.blog_card_work}>
                    <span>Travel</span>
                    <span>Life Style</span>
                  </div>
                  <h3>Portable lates Fashion for young women</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  <span>31st January, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
