import { useState } from "react";
import "./Myform.css";

const Myform = ({ user }) => {
  // constrolled inputs

  // gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);

    // validação
    // envio

    // limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* criação de from */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        {/* label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Bio: </span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        <label>
          <span>Função do sistema</span>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Myform;
