import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 25vh;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  display: flex;
  background-color: #11181f;
  border-top: 0.2rem solid #ff005c;
`;

export const StyledContenido = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  margin-left: 4vw;
  margin-bottom: 6vh;
  p > span {
    font-size: 2rem;
  }
`;

export const StyledContacto = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 4vw;
  width: 50%;
  p {
    cursor: pointer;
    margin-right: 2vw;
  }
  i {
    font-size: 3.5rem;
    cursor: pointer;
  }
`;
