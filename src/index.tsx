import ReactDOM from "react-dom";

import ThemeContextProvider from "./context/ThemeContext";

import App from "./App";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
