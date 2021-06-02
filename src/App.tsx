import { ThemeProvider } from "styled-components";
import GlobalStyle, { MainContainer } from "./styles";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainContainer>
        <Form />
        <Todos />
      </MainContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
