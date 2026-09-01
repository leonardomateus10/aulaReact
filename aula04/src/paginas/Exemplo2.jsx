import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exemplo2()
{
    const[numero1, setNumero1]= useState();
    const[numero2, setNumero2]= useState();
    const[resultado, setResultado]= useState();

    function calcular()
    {
        let soma,diferenca,produto,divisao;

        soma  = Number(numero1) + Number(numero2);
        diferenca  = Number(numero1) - Number(numero2);
        produto  = Number(numero1) * Number(numero2);
        divisao  = Number(numero1) / Number(numero2);

        let resto = Number(numero1) % Number(numero2);
        let potencia =Number(numero1) ** Number(numero2);

        setResultado(
            
            <div>
                <p> a soma de {numero1} + {numero2} = {soma}</p>
                <p> a diferenca {numero1} - {numero2} = {diferenca}</p>
                <p> o produto de {numero1} * {numero2} = {produto}</p>
                <p> a divisao de {numero1} / {numero2} = {divisao.toFixed(2)}</p>

                <p>o resto da divisao {numero1} por {numero2} = {resto}</p>
                <p>a exponenciação de {numero1} <sup>{numero2}</sup> = {potencia}</p>


           </div>
        )

    }

    return (
        <div>

            <h1>Exemplo 2</h1>

            <div className="conteudo">
                <form>
                    <p>
                        digite o número 1 <br />
                        <input type="number"
                               value={numero1}
                               onChange={  (e) => setNumero1(e.target.value)} />
                    </p>

                    <p>
                        digite o número 2 <br />
                        <input type="number"
                               value={numero2}
                               onChange={  (e) => setNumero2(e.target.value)} />
                    </p>

                    <p>
                        <input type="button"
                               value="calcular"
                               onClick={calcular} />
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