import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {
  // 1 userRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // useRef and DOM
  const inputRef = useRef()
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef);
    setText();

    inputRef.current.focus();
  }

  return (
    <div>
      <h2>use Ref</h2>
      <p>O componente renderizou: {numberRef.current} vezes</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Mudar nomes!</button>
      <p>Counter 2: {counter}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Mudar nomes!</button>

      {/* useRef and DOM  */}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef