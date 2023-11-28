import { useState } from "react";

import "./App.css";

import City from "./assets/city.jpg";
import Message from "./components/Message";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import CarDetails from "./components/CarDetails";
import ShowUserName from "./components/ShowUserName";
import ConditionalRender from "./components/ConditionalRender";
import ExecuteFunction from "./components/ExecuteFunction";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 343120 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 12120 },
  ];

  function showMassage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Ana", age: 21, job: "Frontend Developer" },
    { id: 2, name: "Mario", age: 22, job: "Backend Developer" },
    { id: 3, name: "José", age: 17, job: "Mobile Developer" },
  ];

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* Imagem em public  */}
        <div>
          <img src="/Paisagem.jpg" alt="Paisagem" />
        </div>
        <div>
          {/* Imagem em asset  */}
          <img src={City} alt="Cidade" />
        </div>

        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props  */}
        <ShowUserName name={userName} />
        {/* destructuring  */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
        {/* reaproveitando  */}
        <CarDetails brand="Ford" km={450} color="Vermelho" newCar={true} />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        ))}
        {/* fragments */}
        <Fragment propFragment="Teste" />
        {/* children  */}
        <Container myValue="testando">
          <p>Este é o conteúdo</p>
        </Container>
        {/* executar funcao */}
        <ExecuteFunction myFunction={showMassage} />
        {/* state lift */}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />

        {users.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))}
      </div>
    </>
  );
}

export default App;
