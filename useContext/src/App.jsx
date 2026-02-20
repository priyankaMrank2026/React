import React, { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";
//step 1 : create context outside the function
//step 2 : wrap all the child inside a provider
//step 3 : pass values
//step 4 : go inside the consumer and consume the data

const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
      >
        <ChildA></ChildA>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
