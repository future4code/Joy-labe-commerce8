import React from "react"
import styled from 'styled-components';




const NavBar = ({ cart }) => {
    
     const soma = cart.reduce((acc, current) => acc + current.preco, 0)
      

    return (
        
        <header>
            
        <nav>
          <h2 className="logo">PRODUTOS</h2>
          <div className="nav-bar-resumo">
            <div className="nav-bar-valor">  
            <span>{cart.length} {cart.length === 1 ? "Produto" : "Produtos"}</span>
            <span className="nav-bar-valor-total">R$ {soma}</span>
            </div>
            <button className="botao-nav">Limpar</button>
          </div>
        </nav>
        
      </header>
      
    )
}

export default NavBar