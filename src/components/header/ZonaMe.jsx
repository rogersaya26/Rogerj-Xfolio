import React from "react";
import styled from "styled-components";
import './ZonaMe.css'

const StyledZonaMe = styled.div`
  width: 100%;
  height: 70vh;
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
  height: 60vh;
  border: 0.2rem solid #e44878;
  border-radius: 2rem;
  background-color: #11181f;
  opacity: 1;
  
  h1 {
    margin-left: 2rem;
  }

  h2 {
    margin-left: 4rem;
  }


  @media (max-width: 968px) {
    width: 100%;
    height: 100vh;
  }
  a{
    text-decoration: none;
  }
`;

const StyledBotton = styled.div`
  font-size: 4rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const ZonaMe = ({ clickMe, setClickMe }) => {
  return (
    <StyledZonaMe clickMe={clickMe}>
      <StyledContainerMe>
        <StyledBotton>
          <ion-icon name="close-circle" onClick={() => setClickMe(!clickMe)} ></ion-icon>
        </StyledBotton>
        <h1>Roger Jimenez</h1>
        <h2>Profile:  <a href="https://www.linkedin.com/in/roger-jimenez-3929149b/" target="_blank" rel="noreferrer" >Linkedin<span className="icons_me icon_linkedin1"> <ion-icon name="logo-linkedin"></ion-icon></span></a></h2>
        <h2>Repository:  <a href="https://github.com/rogersaya26" target="_blank" rel="noreferrer" >GitHub<span className="icons_me icon_github1"> <ion-icon name="logo-github"></ion-icon></span></a></h2>
        <h2>Mail: Rogersaya@gmail.com<span className="icons_me icon_mail1"> <ion-icon name="mail-outline"></ion-icon></span></h2>
        
      </StyledContainerMe>
    </StyledZonaMe>
  );
};

export default ZonaMe;
