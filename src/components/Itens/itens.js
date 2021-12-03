import React from "react";

const Itens = ({ name, preco, itemIndex, removerItem }) => {
    return(
        <li>
            <h2>{name}</h2>
            <span>R$ {preco}</span>
            <button className="botão-remover" onclick={() => removerItem(itemIndex)}>REMOVER</button>
          </li>
    )
}

export default Itens