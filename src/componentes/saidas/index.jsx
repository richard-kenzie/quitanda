const Saidas = ({ saidas }) => {
    return (
        <div>
            <h4>Saídas:</h4>
            {saidas.map((item) => (
                <li>
                    Nome: {item.name}, qtd: {-1 * item.quantity}, valor: R${" "}
                    {item.price}
                </li>
            ))}
        </div>
    );
};
export default Saidas;
