import "./App.css";
import Myform from "./components/Myform";

function App() {
  return (
    <>
      <div>
        <h1>Forms</h1>
        <Myform
          user={{
            name: "Josias",
            email: "josias@gmail.com",
            bio: "Sou advogado",
            role: "admin",
          }}
        />
      </div>
    </>
  );
}

export default App;
