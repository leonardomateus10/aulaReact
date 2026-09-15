import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio4() {

    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {

        let area;

        area = (Number(base) * Number(altura)) / 2;

        setResultado(
            <div>
                Área do triângulo = {area}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o valor da base do triângulo: <br />

                        <input
                            type="text"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite o valor da altura do triângulo: <br />

                        <input
                            type="text"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
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

