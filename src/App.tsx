import { ThemeProvider } from "styled-components";
import GlobalStyle, { MainContainer } from "./styles";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

import Navbar from "./components/Navbar";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainContainer>
        <form>
          <input type="text" />
        </form>
        <div>Ola</div>
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
