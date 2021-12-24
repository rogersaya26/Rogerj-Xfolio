import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 25vh;
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
  font-size: 1.5rem;
  p > span {
    font-size: 3rem;
  }
`;

export const StyledContacto = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4vw;
  width: 50%;
  
  a {
    text-decoration: none;

  }

  p {
    cursor: pointer;
    margin-right: 2vw;
    color: #fff;
    font-size: 1.6rem;
  }
  p:hover {
    color: #0e76a8;
  }

  .logo_linkedin {
    font-size: 3.5rem;
    cursor: pointer;
    color: #fff;
  }

  .logo_linkedin:hover {
    color: #0e76a8;
  }

  .logo_github {
    font-size: 3.5rem;
    cursor: pointer;
    color: #fff;
    margin-left: 2rem;
  }
  .logo_github:hover {
    color: #000;
  }

`;
