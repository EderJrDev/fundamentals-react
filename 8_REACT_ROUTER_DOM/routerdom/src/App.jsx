import "./App.css";
// 1 - config react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

// components

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
