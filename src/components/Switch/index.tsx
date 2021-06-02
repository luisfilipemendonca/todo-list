import React, { useContext } from "react";

import { SwitchContainer, Input } from "./styled";

import { ThemeContext } from "../../context/ThemeContext";

const Switch: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <SwitchContainer htmlFor="switch" isChecked={theme.title === "light"} />
      <Input
        type="checkbox"
        id="switch"
        checked={theme.title === "light"}
        onChange={setTheme}
      />
    </>
  );
};

export default Switch;
