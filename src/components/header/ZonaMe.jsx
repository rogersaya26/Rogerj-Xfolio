import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import MiaFoto from "../images/miaFoto.jpeg";

const StyledZonaMe = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  position: fixed;
  z-index: 1000;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  visibility: ${({ clickMe }) => (clickMe ? "visible" : "hidden")};
  button {
    cursor: pointer;
  }
`;
const StyledContainerMe = styled.div`
  width: 40%;
  height: 70vh;
  border: 0.2rem solid #e44878;
  border-right: none;
  border-radius: 1rem;
  background-color: #11181f;
  opacity: 1;
  @media (max-width: 968px) {
    width: 100%;
    height: 100vh;
  }
`;
const StyledBotton = styled.div`
  font-size: 4rem;
  cursor: pointer;
`;

const StyledContainerTxtImg = styled.div`
  width: 95%;
  display: flex;
`;
const StyledContainerImg = styled.img`
  width: 30%;
  display: flex;
  justify-content: center;
`;
const StyledContainerTxt = styled.div`
  width: 70%;
  letter-spacing: 0.4rem;
  margin-left: 2rem;
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-family: "Roboto Mono", monospace;
    font-size: 2rem;
    font-weight: 500;
  }
  @media(max-width: 968px) {
    h1{
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
    @media(max-width: 1440px) {
    h1{
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;
const StyledP = styled.p`
  width: 90%;
  margin-left: 2rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 500;
  @media(max-width: 968px) {
    font-size: 1.1rem;
  }
  @media(max-width: 1440px) {
    font-size: 1rem;
  }
`;

const ZonaMe = ({ clickMe, setClickMe }) => {
  return (
    <StyledZonaMe clickMe={clickMe}>
      <StyledContainerMe>
        <StyledBotton>
          <AiFillCloseCircle onClick={() => setClickMe(!clickMe)} />
        </StyledBotton>

        <StyledContainerTxtImg>
          <StyledContainerTxt>
            <h3> Nombre: </h3>
            <br />
            <h1> Roger Jimenez </h1>
            <br />
            <br />
            <h3>Residenciado: Argentina</h3>
            <br />
            <h3> Nacionalidad: Venezolana </h3>
            <br />
            <h3>....</h3>
          </StyledContainerTxt>
          <StyledContainerImg src={MiaFoto} alt="miaFoto" />
        </StyledContainerTxtImg>

        <StyledP>
          <br />
          
          <br />
          <br />
          📩Rogersaya@gmail.com📫
        </StyledP>
      </StyledContainerMe>
    </StyledZonaMe>
  );
};

export default ZonaMe;
