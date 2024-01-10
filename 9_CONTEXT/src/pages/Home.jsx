// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeConter from "../components/ChangeConter";

// 4 - refatorando hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";
// 5 context mais complexo

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  //5 context mais completo
  const { color, dispatch } = useTitleColorContext();

  //6 alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>HOme</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3- alterando valor contexto */}
      <ChangeConter />
      {/* 6 - alterando contexto completo  */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
