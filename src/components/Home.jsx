import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { stringName } from "../stores/name.actions";
import FooterPage from "./FooterPage";
export default function Home({ children }) {
  const [nameState, setNameState] = useState("");

  //chama o dado, usando useSelector
  //pode ser usado em qualquer componente, em nível hierárquico diferente
  const result = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("chegou");
    dispatch(stringName(nameState));
  };
  const handleChange = ({ target }) => {
    setNameState(target.value);
  };

  return (
    <DivFull>
      <h1>Testando</h1>
      <form onSubmit={handleSubmit}>
        Name <input type="text" value={nameState} onChange={handleChange} />
        <button type="submit">enviar</button>
      </form>
      {"dentro da home: " + result}
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
