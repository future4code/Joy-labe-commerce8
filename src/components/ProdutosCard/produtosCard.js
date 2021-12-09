import React from "react";

const ProdutosCard = ({ img, title, preco, addItemCarrinho }) => {
    return(
        <div className="card">
           <img className="produto-photo" src={img} alt="" />
           <h1 className="titulo-produto">{title}</h1>
           <h2 className="titulo-produto">Ð {preco}</h2>
           <button onClick={() => addItemCarrinho(img, title, preco)}>ADICIONAR</button>
        </div>
    )
}

export default ProdutosCard