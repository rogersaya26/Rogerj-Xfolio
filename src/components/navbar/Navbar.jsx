import React, { useState, useEffect } from "react";

import { StyledNavbar, ContainerBtn, Menu, MenuIten } from "./NavbarStyleds";
import { BsList } from "react-icons/bs";
import BtnMenuEnd from '../assets/btn_list2.gif'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open)
  }, [open])

  /* <BsList onClick={() => setOpen(!open)} className="BsList" /> */

   /* left: ${({ open }) => (open ? 0 : "-100%")}; */

  return (
   
    <StyledNavbar>

      <ContainerBtn onClick={() => setOpen(!open)} >
        
{
open ?  <img src={BtnMenuEnd} alt="" className="btn_menu" />  :  <BsList className="btn_menu" /> 


}
          
      </ContainerBtn>
      <Menu open={open}>
        <MenuIten>Home</MenuIten>
        <MenuIten>Skills</MenuIten>
        <MenuIten>Projets</MenuIten>
        <MenuIten>Contact</MenuIten>
      </Menu>
    </StyledNavbar>
   
  );
};

export default Navbar;
