import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio2() {

    const [fahrenheit, setFahrenheit] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {

        let celsius;

        celsius = (Number(fahrenheit) - 32) * 5 / 9;

        setResultado(
            <div>
                Temperatura Celsius = {celsius}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite a temperatura em Fahrenheit: <br />

                        <input
                            type="text"
                            value={fahrenheit}
                            onChange={(e) => setFahrenheit(e.target.value)}
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
                        {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
