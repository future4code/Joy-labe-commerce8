import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import NavBar from "./components/NavBar/NavBar";
import Produtos from "./components/Produtos/produtos";
import Carrinho from "./components/Carrinho/carrinho";
import Filtros from './components/Filtros/filtros';


const App = () => {

  const [cart, setCart] = useState([]);

  function addItemCarrinho(url, name, preco) {
    const itemObjeto = {url, name, preco};
    setCart([...cart, itemObjeto]);
  }

  function removerItem(itemIndex){
    const filtrar = cart.filter( cartItem => cart.indexOf(cartItem) !== itemIndex );
    setCart(filtrar);
    console.log(itemIndex)
  }

  function limparCarrinho (){
    setCart([])
  }


  return (
    <div className="App">
      <NavBar cart={cart} limparCarrinho={limparCarrinho}/>
      <Produtos addItemCarrinho={addItemCarrinho} />
      <Filtros />
      <Carrinho cart={cart} removerItem={removerItem}/>
    </div>
  );
};

export default App;
