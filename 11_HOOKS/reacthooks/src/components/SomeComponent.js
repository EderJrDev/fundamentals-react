import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      validade: () => {
        if (localInputRef.current.ref.length > 3) {
          localInputRef.current.value = "";
        }
      }
    }
  })

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent