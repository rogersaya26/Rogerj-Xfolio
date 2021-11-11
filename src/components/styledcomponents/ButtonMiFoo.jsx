import styled from "styled-components";

export const ButtonMiFoo = styled.button`
  color: #fff;
  font-size: 1rem;
  border: .2rem solid #e44878;
  border-radius: 0.8rem;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.5s;
  position: absolute;

  &:hover {
    transition: 0.5s;
    border-bottom: 0.4rem solid #ff005c;
    border-right: 0.4rem solid #e44878;
  }
`;
