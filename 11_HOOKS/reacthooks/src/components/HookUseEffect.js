import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // 1 useState
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log('Estou sendo executado')
  });

  const changeSomething = () => {
    setNumber(number + 1);
  }

  useEffect(() => {
    console.log('Estou sendo executado, uma vez')

  }, []);

  // with dependencies
  const [anotherNumber, setAnotherNumber] = useState("Matheus");

  useEffect(() => {
    console.log('Estou sendo executado, apenas quando o anotherNumber muda')

  }, [anotherNumber]);

  // cleanup

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('Hello World')

    // }, 2000);

    // return () => clearTimeout(timer)   //cleanup

  }, [anotherNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>

      <button onClick={changeSomething}>Mudar número!</button>


      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar AnotherNumber</button>
      {/* <form>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </form>
      <p>Você tem {age} anos!</p> */}
      <hr />
    </div>
  )
}

export default HookUseEffect