const TemplateExpressions = () => {
  const name = "Eder Jr";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem ?</h1>
      Você atua como: {data.job}
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExpressions;
