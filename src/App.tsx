import { ThemeProvider } from "styled-components";
import GlobalStyle, { MainContainer } from "./styles";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { Provider } from "react-redux";

import { store } from "./store/";

import Navbar from "./components/Navbar";
import Form from "./components/Form";
import TodosTable from "./components/TodosTable";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainContainer>
          <Form />
          <TodosTable />
        </MainContainer>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
