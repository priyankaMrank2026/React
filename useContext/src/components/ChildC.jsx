import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <div>
      <button onClick={handleTheme}> change theme</button>
    </div>
  );
};

export default ChildC;
