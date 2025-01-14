import React, { useContext } from 'react'
import { FavoriteContext } from '../../context/FavoriteContext'
import style from "./style.module.css"
import { MdDelete } from "react-icons/md";
import { Helmet } from 'react-helmet';
function Favorite() {
  let { favoriteData, setFavoriteData } = useContext(FavoriteContext)
  function DeleteData(id) {
    let favDel = favoriteData.filter((item) => item._id !== id)
    setFavoriteData(favDel)
  }
  return (
    <div className={style.favorite}>
        <Helmet>
        <title>Favorite</title>
      </Helmet>
      <div className="content">
     {
      favoriteData.length===0 ? (<h2 style={{textAlign:"center"}}>Your Wishlist is empty</h2>) : (
        <div className={style.immgr_cards}>
        {

          favoriteData.map(item => (
            <div key={item._id} className={style.immgr_card}>
              <div className={style.immgr_card_img}>
                <img src={item.image} alt="cardImg" />
              </div>
              <div className={style.immgr_card_desc}>
                <span>{item.country}</span>
                <h3>{item.title ? item.title.slice(0, 10) : "No Title"}...</h3>
                <p>{item.description ? item.description.slice(0, 15) : "No Description"}...</p>
                <div className="btns">
                  <button onClick={() => DeleteData(item._id)}><MdDelete /></button>

                </div>
              </div>
            </div>
          )
          )
        }
      </div>
      )
     }
      </div>
    </div>
  )

}

export default Favorite