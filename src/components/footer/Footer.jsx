import React from "react";
import { StyledFooter, StyledContenido, StyledContacto } from "./StyledFooter";
import { ButtonMiFoo } from "../styledcomponents/ButtonMiFoo";
import {BsLinkedin} from 'react-icons/bs';

const Footer = ({clickMe, setClickMe}) => {

  return (
    <StyledFooter>
      <StyledContenido>
        <p>
          ROGER JIMENEZ <span>&copy;</span> 2021
          <br />
          DESARROLLADOR <br />
          <br />
          <ButtonMiFoo onClick={() => setClickMe(!clickMe)} >MAS SOBRE MI</ButtonMiFoo>
        </p>
      </StyledContenido>

      <StyledContacto>
        <p>DESCARGAR CV</p>
        <i><BsLinkedin/></i>
      </StyledContacto>
    </StyledFooter>
  );
};

export default Footer;
