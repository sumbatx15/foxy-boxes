import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import Plane from "./components/Plane";
import ArrowBoxWithRandom from "./components/ArrowBox/ArrowBoxWithRandom";
import "./App.css";

export const RandomContext = createContext(-1);

const App = () => {
  const [random, setRandom] = useState(-1);
  const randomize = () => setRandom(Math.random());
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="options">
          <button onClick={randomize}>{"Randomize"}</button>
        </div>
        <RandomContext.Provider value={random}>
          <div className="plane-of-planes">
            <Plane arrowComponent={ArrowBoxWithRandom} />
            <Plane arrowComponent={ArrowBoxWithRandom} />
            <Plane arrowComponent={ArrowBoxWithRandom} />
            <Plane arrowComponent={ArrowBoxWithRandom} />
          </div>
        </RandomContext.Provider>
      </main>
    </div>
  );
};

export default App;
