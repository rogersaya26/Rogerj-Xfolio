import React, { useState } from "react";
import { StyledNavbar, ContainerBtn, Menu, MenuIten } from "./NavbarStyleds";
import { BsList } from "react-icons/bs";
import BtnMenuEnd from '../assets/btn_list2.gif'


const Navbar = ({clickMe, setClickMe}) => {
  let [open, setOpen] = useState(false);


  return (
 
    <StyledNavbar>

      <ContainerBtn onClick={() => setOpen(!open)} >
      
      {
      open ?  <img src={BtnMenuEnd} alt="Button Navbar" className="btn_menu" />  :  <BsList className="btn_menu" /> 
    }
    
      </ContainerBtn>

      <Menu open={open}>
        <MenuIten>Home</MenuIten>
        <MenuIten onClick={()=> setOpen(open=false) }> <a href="#skillid"  >Skills</a></MenuIten>
        <MenuIten onClick={() => setOpen(open=false)} ><a href="#projectid">Projects</a> </MenuIten>
        <MenuIten><span onClick={() => setClickMe(!clickMe) }>Contact</span></MenuIten>
      </Menu>
    </StyledNavbar>
   
  );
};

export default Navbar;
