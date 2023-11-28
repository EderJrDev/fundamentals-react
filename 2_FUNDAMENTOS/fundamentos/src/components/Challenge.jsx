const Challenge = () => {
  const firstValue = 10;
  const secondValue = 20;

  const handleSubmit = () => {
    const sum = firstValue + secondValue;

    console.log("O valor somado é : ", sum);
  };

  return (
    <div>
      <h1>Valor 1: {firstValue}</h1>
      <h1>Valor 2: {secondValue}</h1>
      <p>Some os valores:</p>
      <button onClick={handleSubmit}>Somar</button>
    </div>
  );
};

export default Challenge;
