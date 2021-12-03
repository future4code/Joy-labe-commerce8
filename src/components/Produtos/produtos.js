import React from "react";
import ProdutosCard from "../ProdutosCard/produtosCard";
import { produtos } from '../../data/database'


const Produtos = ({ addItemCarrinho }) => {
    return (
        <main>
        <section className="produtos-lista">
          {produtos.map((produto, index) => (<ProdutosCard img={produto.url}
          title={produto.name} 
          preco={produto.preco}
          addItemCarrinho={addItemCarrinho}
          />))}
        </section>
      </main>
    )
}

export default Produtos