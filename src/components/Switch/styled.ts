import styled from "styled-components";

type ISwitch = {
  isChecked: boolean;
};

export const SwitchContainer = styled.label<ISwitch>`
  width: 2rem;
  height: 0.4rem;
  background: #f5f5f5;
  border-radius: 3px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.secondary};
    top: 50%;
    left: ${({ isChecked }) => (isChecked ? 0 : "100%")};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: all 0.2s linear;
  }
`;

export const Input = styled.input`
  display: none;
`;
