const Entradas = ({ entradas }) => {
  return (
    <div>
      <h4>Entradas:</h4>
      {entradas.map((item) => (
        <li>
          Nome: {item.name}, qtd: {item.quantity}, valor: R$ {item.price}
        </li>
      ))}
    </div>
  );
};
export default Entradas;
