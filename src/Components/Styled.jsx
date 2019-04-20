import styled from "styled-components";
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background-color: var(--mainBlue);
  border: 0.09rem solid var(--mainGold);
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s linear;
  transform: scale(1);
  padding: 0.5rem;
  &:hover {
    background: var(--mainGold);
  }
  &:active {
    transform: scale(1.01);
    box-shadow: 4px 6px 30px -4px;
  }
`;
export { ButtonContainer };
