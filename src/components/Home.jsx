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

  const handleClear = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <DivFull>
      <h1>Estudos Redux</h1>{" "}
      <DivForm>
        <form onSubmit={handleSubmitName}>
          <b>NAME</b>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <InputStyle
              type="text"
              value={nameState}
              onChange={handleChangeName}
            />
          </div>
        </form>{" "}
      </DivForm>
      <DivForm>
        <form onSubmit={handleSubmitSurname}>
          <b>SURNAME</b>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <InputStyle
              type="text"
              value={surNameState}
              onChange={handleChangeSurName}
            />
          </div>
          <br />
        </form>{" "}
      </DivForm>
      {resultName && (
        <>
          <p>
            <b>NAME: </b>
            {resultName}
          </p>
          <p>
            <b>SURNAME: </b>
            {resultSurname ? resultSurname : "..."}
          </p>

          <ButtonStyle onClick={handleClear}> Limpar</ButtonStyle>
        </>
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
const DivForm = styled.div`
  width: 500px;
  margin: 10px;
  display: flex;
  justify-content: center;
`;
const InputStyle = styled.input`
  width: 300px;
  margin-left: 40px;
  height: 26px;
  border-radius: 5px;
`;

const ButtonStyle = styled.button`
  width: 70px;
  color: #fff;
  background: #000;
  border-radius: 8px;
  height: 40px;
  &:hover {
    color: #000;
    background: #fff;
  }
`;
