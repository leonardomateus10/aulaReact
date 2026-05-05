export default function Exercicio2({ peso, altura }) {
    const imc = peso / (altura * altura);
  
    return (
      <div>
        <p>
          O peso é {peso} kg e a altura é {altura} metros, e o IMC é {imc.toFixed(3)}.
        </p>
      </div>
    );
  }