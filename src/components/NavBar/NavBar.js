import React from "react"
import styled from 'styled-components';


const Cabecalho = styled.header`
width: 100vw;
height: 15vh;
background: #f8f7f7;
display: flex;
align-itens: center;
justify-content: center;
`

const Resumo = styled.nav`
width: 90%;
max-width: 900px;
display: flex;
align-itens:center;
justify-content: space-between;
`

const NavBar = ({ cart }) => {
    
     const soma = cart.reduce((acc, current) => acc + current.preco, 0)
      

    return (
        <Cabecalho>
        <header>
        <Resumo>    
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
        </Resumo> 
      </header>
      </Cabecalho>
    )
}

export default NavBar