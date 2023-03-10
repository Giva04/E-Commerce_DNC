import React from 'react'
import "./index.scss"
import shop from "../../assets/image/cartShop.png"
import logoDNC from "../../assets/image/logo_DNC.png"

const HeaderMenu = () => {
  return (
    <header className="header-menu">
        <img src={logoDNC} alt="logoDNC" className="header-menu__logoDNC" />
        
        <ul>
            <li>Home</li>
            <li>Novidades</li>
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Atendimento</li>
        </ul>
        <div className="Shooping"> 
        <h1>Meu Carrinho</h1>
        <img className="header-menu__shoop" src={shop} alt="cardShoop" />   
        </div>   
    </header>
  )
}

export default HeaderMenu