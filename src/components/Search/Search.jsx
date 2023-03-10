import React from 'react'
import "./index.scss"
import  logo_search from "../../assets/image/search.png";
import boneco from "../../assets/image/profile.png";
import coracao from "../../assets/image/heart.png";

const Search = () => {
  return (
    <div className="search">
      
        <img src={logo_search} alt="search" className="search__search-logo" />
                
        <input type="text" placeholder="Seach" />
        
          <img src={boneco}  alt="Profile" className="profile" />
          <img src={coracao} alt="Heart" className="heart" />       
          
    </div>
  )
}

export default Search