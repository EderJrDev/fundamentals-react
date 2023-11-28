//compponnets
import FistComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

// styles / CSS
import "./App.css";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FistComponent />
        <TemplateExpressions />
        <Events />
        <Challenge />
      </div>
    </>
  );
}

export default App;
