import logo from "./logo.svg";
import "./App.css";
import Form from "./componentes/formulario";
import Display from "./componentes/display";
import { useState } from "react";

function App() {
  const [fruitList, setFruitList] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: 10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  console.log(fruitList);
  return (
    <div className="App">
      <header className="App-header">
        <Form fruitList={fruitList} setFruitList={setFruitList} />
        <Display fruitList={fruitList} />
      </header>
    </div>
  );
}

export default App;
