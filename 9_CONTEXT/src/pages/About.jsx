import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const About = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      {" "}
      <h1>HOme</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
