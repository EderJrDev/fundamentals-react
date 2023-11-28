const UserDetails = ({ name, age, job }) => {
  const canDrive = age >= 18 ? true : false;

  return (
    <div>
      <h2>informações do usuário:</h2>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {canDrive ? (
        <p>Obs: Pode tirar carteira de habilitação</p>
      ) : (
        <p>Obs: Não pode tirar carteira de habilitação</p>
      )}
    </div>
  );
};

export default UserDetails;

// by teacher

// const UserDetails = ({ name, age, job }) => {

//   return (
//     <div>
//       <h2>informações do usuário:</h2>
//       <p>Nome: {name}</p>
//       <p>Idade: {age}</p>
//       <p>Profissão: {job}</p>
//       {age > 18 ? (
//         <p>Obs: Pode tirar carteira de habilitação</p>
//       ) : (
//         <p>Obs: Não pode tirar carteira de habilitação</p>
//       )}
//     </div>
//   );
// };

// export default UserDetails;
