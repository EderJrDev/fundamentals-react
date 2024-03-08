import React, { useState } from 'react'

const HookUseState = () => {
  // 1 useState
  const [name, setName] = useState("Matheus");

  const changeName = () => {
    setName("Ana");
  }

  const [age, setAge] = useState(18);
  return (
    <div>
      <h2>UseState</h2>
      <p>useState: {name}</p>

      <button onClick={changeName}>Mudar nomes!</button>
      <form>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </form>
      <p>Você tem {age} anos!</p>
    </div>
  )
}

export default HookUseState