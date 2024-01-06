import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4- cutom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const res = await fetch(url);
  //     // ...
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2 - add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinâmico

    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {/* 6 loading  */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul>
            {items &&
              items.map((product) => (
                <>
                  <li key={product.id}>
                    {product.name} - R$ {product.price}{" "}
                    <button onClick={() => deleteProduct(product.id)}>
                      Excluir
                    </button>
                  </li>
                </>
              ))}
          </ul>
        )}

        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Preço
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* 7 - state de loading  */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
