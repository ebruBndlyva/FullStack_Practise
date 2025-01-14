import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.css";
import bgImg from "../../assets/header-img.png.webp";
import blog1 from "../../assets/b1.jpg.webp"
import blog2 from "../../assets/b2.jpg.webp"
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useDeleteDataMutation, useGetCountryDataQuery } from "../../Redux/services/CountryApi";
import { FavoriteContext } from "../../context/FavoriteContext";
import Helmet from "react-helmet"
import Swal from 'sweetalert2';
function Home() {
  let { data, isLoading, refetch } = useGetCountryDataQuery()
  let [DeleteData] = useDeleteDataMutation()
  console.log(data);
  let { favoriteData, setFavoriteData } = useContext(FavoriteContext)
  let [datas, setDatas] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setDatas(data)
    }
  }, [data])



  function AddFavorite(item) {

    let findFavorite = favoriteData.find(fav => fav._id === item._id)
    if (findFavorite) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This member is already in your favorites!",
      });
    } else {
      setFavoriteData([...favoriteData, item])

    }
  }

  async function DeleteDatas(id) {
    await DeleteData(id);
    refetch();
  }
  function handleSearch(inputValue) {
    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      setDatas(data);
      return;
    }

    const filteredData = data.filter(({ country }) =>
      country.toLowerCase().includes(trimmedValue)
    );

    setDatas(filteredData);
  }
  function handleSort(sortType) {
    let sortedData;
    if (sortType === "default") {
      setDatas(data);
      return;
    }
    switch (sortType) {
      case "a-z":
        sortedData = data.toSorted((a, b) => a.country.localeCompare(b.name));
        break;
      case "z-a":
        sortedData = data.toSorted((a, b) => b.country.localeCompare(a.name));
        break;
      default:
        sortedData = data;
    }

    setDatas([...sortedData]);
  }




  return (
    <div className={style.main}>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
            <div className={style.filters}>
              <input className={style.searchInp} type="text" placeholder='Search...' onChange={(e) => handleSearch(e.target.value)} />
              <select className={style.sortList} onChange={(e) => handleSort(e.target.value)} >
                <option value="default">Filters</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>

            </div>
            <div className={style.immgr_cards}>
              {
                isLoading ? (<h2>...Loading</h2>) : (
                  datas.map(item => (
                    <div key={item._id} className={style.immgr_card}>
                      <div className={style.immgr_card_img}>
                        <img src={item.image} alt="cardImg" />
                      </div>
                      <div className={style.immgr_card_desc}>
                        <span>{item.country}</span>
                        <h3>{item.title ? item.title.slice(0, 10) : "No Title"}...</h3>
                        <p>{item.description ? item.description.slice(0, 15) : "No Description"}...</p>
                        <div className="btns" style={{ display: "flex", gap: "10px" }}>
                          <button style={{ backgroundColor: "transparent", color: "red", padding: "5px", fontSize: "18px",border:"none" }} onClick={() => DeleteDatas(item._id)}><MdDelete /></button>
                          <button style={{ backgroundColor: "transparent", color: "violet",border:"none", padding: "5px", fontSize: "18px" }} onClick={() => AddFavorite(item)}><FaRegHeart /></button>
                        </div>
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
