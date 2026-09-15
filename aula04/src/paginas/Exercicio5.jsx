import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio5() {

    const [lado, setLado] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {

        let area;

        area = Number(lado) * Number(lado);

        setResultado(
            <div>
                Área do quadrado = {area}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 5</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o valor do lado do quadrado: <br />

                        <input
                            type="text"
                            value={lado}
                            onChange={(e) => setLado(e.target.value)}
                        />
                    </p>

                    <button type="button" onClick={calcular}>
                        Calcular
                    </button>

                </form>

                <br />

                {resultado}

                <br />

                <Link to="/">Voltar</Link>

            </div>

        </div>
    );
}
