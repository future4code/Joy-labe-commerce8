import React from "react";
import Itens from "../Itens/itens";

const Carrinho = ({ cart, removerItem }) => {
    return (
        <footer>
        <ul>
          {cart.map((cartItem, index) => (
          <Itens key={index}
           itemIndex={index}
           name={cartItem.name} 
           preco={cartItem.preco} 
           removerItem={removerItem}/> ))}
        </ul>
      </footer>
    )
}

export default Carrinho