import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio6() {

    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [resultado, setResultado] = useState();

    function calcular() {

        let subtotal;
        let desconto;
        let valorFinal;

        subtotal = Number(quantidade) * Number(preco);
        desconto = subtotal * 0.10;
        valorFinal = subtotal - desconto;

        setResultado(
            <div>
                Subtotal = R$ {subtotal.toFixed(2)} <br />
                Desconto = R$ {desconto.toFixed(2)} <br />
                Valor final a pagar = R$ {valorFinal.toFixed(2)}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite a quantidade do produto: <br />

                        <input
                            type="text"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite o preço do produto: <br />

                        <input
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </p>

                    <button type="button" onClick={calcular}>
                        Calcular
                    </button>

                </form>

                {resultado}

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}