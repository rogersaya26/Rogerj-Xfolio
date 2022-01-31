import React from "react";
import { StyledFooter, StyledContenido, StyledContacto } from "./StyledFooter";
import { ButtonMiFoo } from "../styledcomponents/ButtonMiFoo";
/* import {BsLinkedin} from 'react-icons/bs'; */

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
        
        <a href="https://drive.google.com/file/d/1EjM9RRUFmznASuX_MuiGtHirH7XA4Zrc/view?usp=sharing" target="_blank" rel="noreferrer" ><p> DESCARGAR CV</p></a>
     
        <a href="https://www.linkedin.com/in/roger-jimenez-3929149b/" target="_blank" rel="noreferrer" > <span className="logo_linkedin"><ion-icon name="logo-linkedin"></ion-icon></span></a>
        <a href="https://github.com/rogersaya26" target="_blank" rel="noreferrer" > <span className="logo_github" ><ion-icon name="logo-github"></ion-icon></span></a>

      </StyledContacto>



    </StyledFooter>
  );
};

export default Footer;
