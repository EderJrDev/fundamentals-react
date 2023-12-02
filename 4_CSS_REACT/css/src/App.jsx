import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Eder");
  const redTitle = false;
  return (
    <>
      <div>
        {/* CSS global */}
        <h1>React com CSS</h1>
        {/* CSS component */}
        <MyComponent />
        <p>Este paragrafo é do App.jsx</p>
        {/* css inline  */}
        <p
          style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}
        >
          Este elemento foi estilizado de forma inline
        </p>
        {/* css inline dinâmico  */}
        <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
          Css dinâmico
        </h2>
        <h2
          style={
            name === "Eder" ? { color: "green", backgroundColor: "#000" } : null
          }
        >
          Teste nome
        </h2>
        {/* classe dinÂmica  */}
        <h2 className={redTitle ? "red-title" : "title"}>
          Este titulo vai ter classe dinâmica
        </h2>
        {/* css modules */}
        <Title />
      </div>
    </>
  );
}

export default App;
