import { useState } from "react/cjs/react.development";
import Entradas from "../entradas";
import Saidas from "../saidas";

const Display = ({ fruitList }) => {
  const [changeView, setChangeView] = useState(false);

  const saidas = fruitList.filter((item) => item.quantity < 0);
  const entradas = fruitList.filter((item) => item.quantity > 0);
  const quantidadeVendidas = saidas.reduce(
    (acc, item) => item.quantity + acc,
    0
  );
  const valorTotal = saidas.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const quantidadeEntradas = entradas.reduce(
    (acc, item) => item.quantity + acc,
    0
  );

  return (
    <div>
      <h3>Display</h3>
      <button onClick={() => setChangeView(!changeView)}>
        {changeView ? "mostrar saídas" : "mostrar entradas"}
      </button>

      {changeView ? (
        <Entradas entradas={entradas} />
      ) : (
        <Saidas saidas={saidas} />
      )}

      <div>
        <h4>Todas as movimentações:</h4>
        {fruitList.map((item) => (
          <li>
            Nome: {item.name}, qtd: {item.quantity}, valor: R$ {item.price}
          </li>
        ))}
      </div>
      <p>quantidade total de frutas vendidas: {-1 * quantidadeVendidas}</p>
      <p>quantidade total de entradas de frutas: {quantidadeEntradas}</p>

      <p>Valor total de saídas: R${-1 * valorTotal}</p>
    </div>
  );
};

export default Display;
