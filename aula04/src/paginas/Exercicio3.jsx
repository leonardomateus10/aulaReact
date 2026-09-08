import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio3() {

    const [valor, setValor] = useState();
    const [taxa, setTaxa] = useState();
    const [tempo, setTempo] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {

        let valorParcela;

        valorParcela =
            Number(valor) +
            (Number(valor) * ((Number(taxa) ** 2) / 100) * Number(tempo));

        setResultado(valorParcela);
    }

    return (
        <div>

            <h1>Exercício 3</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o valor da prestação: <br />

                        <input
                            type="text"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite a taxa de juros (%): <br />

                        <input
                            type="text"
                            value={taxa}
                            onChange={(e) => setTaxa(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite o tempo de dias de atraso: <br />

                        <input
                            type="text"
                            value={tempo}
                            onChange={(e) => setTempo(e.target.value)}
                        />
                    </p>

                    <p>
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcular}
                        />
                    </p>

                    <p>
                        Valor parcela = {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
