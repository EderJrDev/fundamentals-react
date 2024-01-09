// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeConter from "../components/ChangeConter";

// 4 - refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>HOme</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3- alterando valor contexto */}
      <ChangeConter />
    </div>
  );
};

export default Home;
