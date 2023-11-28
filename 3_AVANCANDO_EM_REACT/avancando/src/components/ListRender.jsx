import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Eder", age: 20 },
    { id: 2, name: "João", age: 22 },
    { id: 3, name: "Maria", age: 129 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
