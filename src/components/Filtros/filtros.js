import React from "react";
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  text-align: center
  padding: ;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `


const Filtros = () => {
    return (
        <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
          />
        </InputContainer>
        <button className="botao-filtrar">FILTRAR</button>
    </FiltersContainer>
    )
}

export default Filtros