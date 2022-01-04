import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function FooterPage() {
  const { name, surname } = useSelector((state) => state);

  return (
    <DivFooter>
      Nome completo:{" "}
      <b>
        {name} {surname}
      </b>
    </DivFooter>
  );
}

const DivFooter = styled.footer`
  width: 100%;
  color: white;
  background-color: black;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
