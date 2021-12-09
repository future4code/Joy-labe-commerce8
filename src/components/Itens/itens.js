import React from "react";

const Itens = ({ name, preco, itemIndex, removerItem }) => {
    return(
        <li>
            <h2>{name}</h2>
            <span>Ð {preco}</span>
            <button className="botão-remover" onClick={() => removerItem(itemIndex)}>REMOVER</button>
          </li>
    )
}

export default Itens