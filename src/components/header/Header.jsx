import React from "react";
import NightLife from "../images/nightlife.gif";
import styled from "styled-components";
import Letrero from "./letrero/Letrero";
import ZonaMe from "./ZonaMe";

const BgHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  background-color: #000;
  position: relative;
  img {
    opacity: 0.6;
  }
  `;

const Header = ({clickMe, setClickMe}) => {
  
  return (
    <BgHeader>
      <img src={NightLife} alt="Bg programmer in house" />
      <Letrero clickMe={clickMe} setClickMe={setClickMe} />
      <ZonaMe clickMe={clickMe} setClickMe={setClickMe} />
    </BgHeader>
  );
};

export default Header;
