import React, { useState } from "react";
import { StyledNavbar, ContainerBtn, Menu, MenuIten } from "./NavbarStyleds";
import { BsList } from "react-icons/bs";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <ContainerBtn>
        <BsList onClick={() => setOpen(!open)} className="BsList" />
      </ContainerBtn>
      <Menu open={open}>
        <MenuIten>Home</MenuIten>
        <MenuIten>Habilidades</MenuIten>
        <MenuIten>Proyecto</MenuIten>
        <MenuIten>Contacto</MenuIten>
      </Menu>
    </StyledNavbar>
  );
};

export default Navbar;
