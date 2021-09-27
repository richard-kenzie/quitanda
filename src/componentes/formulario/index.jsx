import { useState } from "react";

const Form = ({ fruitList, setFruitList }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAdd = () => {
    const newItem = {
      name: name,
      quantity: Number(quantity),
      price: Number(price),
    };
    setFruitList([...fruitList, newItem]);
  };

  return (
    <div
      style={{ border: "1px solid white", padding: "20px", textAlign: "left" }}
    >
      <h3>registrar transação:</h3>
      <div>
        <div>
          Nome:{" "}
          <input
            type="text"
            style={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Quantidade:{" "}
          <input
            type="text"
            style={{ width: "100%" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          Valor:{" "}
          <input
            type="text"
            style={{ width: "100%" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button style={{ width: "80%", margin: "5% 10%" }} onClick={handleAdd}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Form;
