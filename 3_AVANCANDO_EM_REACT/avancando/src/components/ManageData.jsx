import { useState } from "react";

const ManageData = () => {
  const someData = 10;

  const [number, setNumber] = useState(10);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}> Mudar Variável</button>
        <button onClick={() => setNumber(15)}> Mudar o state</button>
      </div>
      <div>
        <p>Valor: {number}</p>
      </div>
    </div>
  );
};

export default ManageData;
