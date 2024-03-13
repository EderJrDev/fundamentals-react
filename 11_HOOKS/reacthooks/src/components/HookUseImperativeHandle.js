import React, { useRef } from 'react'

import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validade()} >?Validade</button>
      <hr />
    </div>
  )
}

export default HookUseImperativeHandle