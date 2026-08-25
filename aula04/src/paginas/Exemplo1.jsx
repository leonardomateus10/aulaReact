import {Link} from "react-router-dom";
import { useState } from "react";

export default function Exemplo1()
{
    const [nome,setNome] = useState();
    const [idade, setIdade] = useState();

    const [dias,setDias] = useState();
    const [resultado, setResultado] = useState();

    function calcular()
    {
        let res = idade * 365;

        setDias(res);

    }

    function processar()
    {
        let res = idade * 365;
        setDias(res);

        setResultado(
            <div>
                O aluno {nome} ja viveu {res} dias.

            </div>

        );

        
    }

    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">

                <form>

                    <p>
                       digite o nome do aluno <br />
                       <input type="text" value={nome} onChange={ (e) => setNome ( e.target.value)}/> 
                    </p>

                    <p>
                        digite a idade <br />
                        <input type="text" value={idade} onChange={ (e) => setIdade ( e.target.value)}/> 
                    </p>

                    <p>
                        <input type="button" value="calcular" onClick={calcular} />

                        <input type="button" value="processar" onClick={processar} />
                    </p>
                      
                </form>

                <p>
                    nome do aluno: {nome} <br />
                    idade: {idade}

                    <br />
                    dias vividos: {dias}
                </p>

                <p>
                    {resultado}
                </p>



                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}