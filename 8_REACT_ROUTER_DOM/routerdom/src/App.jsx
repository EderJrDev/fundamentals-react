import "./App.css";
// 1 - config react router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
//pages
import Home from "./pages/Home";
import Info from "./pages/Info";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          {/* 9 search  */}
          <SearchForm />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* rota dinâmica */}
            <Route path="/products/:id" element={<Product />} />
            {/* nested route */}
            <Route path="/products/:id/info" element={<Info />} />

            <Route path="/search" element={<Search />} />

            {/* redirect */}
            <Route path="/company" element={<Navigate to={"/about"} />} />

            {/* 7 no match route  */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
