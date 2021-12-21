import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  z-index: 30;
  color: #fff;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 968px) {
    margin: 0;
  }
`;

export const ContainerBtn = styled.div`
  display: none;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 968px) {
    display: flex;

    .BsList {
      color: #ff005c;
      font-size: 6rem;
      background: transparent;
      margin-top: 5vh;
      margin-right: 10%;
      z-index: 40;
      cursor: pointer;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  width: 50vw;
  justify-content: space-around;
  list-style: none;
  border: 0.2rem solid var(--orangeyellow);
  background-color: #11181f;
  border-radius: 1rem;
  padding: 0.8rem;

  @media (max-width: 968px) {
    left: ${({ open }) => (open ? 0 : "-100%")};
    width: 100%;
    height: 70vh;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    background-color: #11181f;
    font-size: 2.5rem;
    transition: .5s;
  }
`;

export const MenuIten = styled.li`
  cursor: pointer;

  &:hover {
    border-bottom: 0.4rem solid #ff005c;
  }

  &:first-child {
    border-bottom: 0.4rem solid #ff005c;
  }
  @media (max-width: 968px) {
    margin: 5vh 0;
  }
`;

// export const MenuItenLink = styled.a`

// `;
