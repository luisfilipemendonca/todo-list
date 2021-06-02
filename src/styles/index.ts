import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

export default GlobalStyle;

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 2rem auto;
`;
