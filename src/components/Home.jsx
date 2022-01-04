import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { stringName, surName } from "../stores/name.actions";
import FooterPage from "./FooterPage";
export default function Home({ children }) {
  const [nameState, setNameState] = useState("");
  const [surNameState, setSurnameState] = useState("");

  //chama o dado, usando useSelector
  //pode ser usado em qualquer componente, em nível hierárquico diferente
  const resultName = useSelector((state) => state.name);
  const resultSurname = useSelector((state) => state.surname);
  const dispatch = useDispatch();

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(stringName(nameState));
    dispatch(surName(surNameState));
  };

  const handleChangeName = ({ target }) => {
    setNameState(target.value);
  };

  const handleSubmitSurname = (event) => {
    event.preventDefault();
    dispatch(stringName(nameState));
    dispatch(surName(surNameState));
  };
  const handleChangeSurName = (event) => {
    setSurnameState(event.target.value);
  };

  return (
    <DivFull>
      <h1>Testando</h1>
      <form onSubmit={handleSubmitName}>
        Name <input type="text" value={nameState} onChange={handleChangeName} />
      </form>
      <form onSubmit={handleSubmitSurname}>
        Surname{" "}
        <input
          type="text"
          value={surNameState}
          onChange={handleChangeSurName}
        />
        <br />
        <button type="submit">enviar</button>
      </form>
      <p> {"nome: " + resultName}</p>
      <p>{"Sobre nome: " + resultSurname}</p>
      {resultName && resultSurname && (
        <button onClick={() => localStorage.clear()}> Limpar</button>
      )}
      <FooterPage />
    </DivFull>
  );
}

const DivFull = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
