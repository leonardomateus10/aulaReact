export default function Exercicio10({ salario }) {

    let gratificacao = Number(salario) * 0.08;
    let salarioFinal = Number(salario) + gratificacao;
    
    return (
        <div>
            <p>
                Salário base: {salario} <br />
                Gratificação: {gratificacao} <br />
                Salário final: {salarioFinal}< br />
            </p>
        </div> 
    )

}    