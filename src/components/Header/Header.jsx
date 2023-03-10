import React from 'react'
import "./index.scss"
import logoDNC from "../../assets/image/logo_DNC.png"

const Header = () => {
  return (
    <div className="Header">
        <img className="Header__img" src={logoDNC} alt="logoDNC" />
    </div>
  )
}

export default Header;