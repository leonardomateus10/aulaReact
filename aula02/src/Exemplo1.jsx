export default function Exemplo ({numero1, numero2})
{
    let soma = Number(numero1)+ Number (numero2);
    return(
        <div>
            <p>
                número 1 : {numero1} <br />
                número 2: {numero2} <br />
                a soma é : {soma}
            </p>

        </div>
    );
}