export default function Exercicio9({ vendas, salario }) {

    let comissao = Number(vendas) * 0.06;
    let salarioFinal = Number(salario) + comissao;

    return (
        <div>
            <p>
                Valor das vendas: {vendas} <br />
                Salário: {salario} <br />
                Comissão: {comissao} <br />
                Salário final: {salarioFinal}
            </p>
        </div>
    );
}