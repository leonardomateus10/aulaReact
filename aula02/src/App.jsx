 import"./app.css";
 import Exemplo1 from "./Exemplo1";
 import Exercicio1 from "./exercicio1";
 import Exercicio2 from "./exercicio2";
 import Exercicio3 from "./exercicio3";    
 import Exercicio4 from "./exercicio4";
 import Exercicio5 from "./exercicio5";

 export default function App()
 {
  return (
    <div> 
     
     
      <h1>aula 02 - criação de componentes</h1>



     <div className="card">
      <h3>chamadas para o componente  esxemplo 1</h3>

      <exemplo1 numero1={10} numero2={20}/>
     </div>

     <div className="card">
      <h3>esxercicio1</h3>
      <Exercicio1 numero = {12}/>
      <Exercicio1 numero = {67}/>
      <Exercicio1 numero = {-5}/>

      </div>

     <div className="card">
        <h3> exercicio2</h3>
        <Exercicio2  peso ={80} altura ={1.80} />
        <hr />
        <Exercicio2 peso ={60} altura={1.60} />
     </div>

     <div className="card">
      <h3>exercicio3</h3>
      <Exercicio3 nota1 ={7.5} nota2={9.5}/>
      <hr />
      <Exercicio3 nota1 ={3} nota2={6.5}/>
      <hr />
      </div>

      <div className="card">
      <h3> Exercício 4</h3>
      <Exercicio4 tipo="retangulo" base={10} altura={5} />
      <Exercicio4 tipo="triangulo" base={10} altura={5} />
      <Exercicio4 tipo="quadrado" base={10} altura={10} />
      
      </div> 

      <div className="card">
       <hr />
      <h3> Exercício 5</h3>
      <Exercicio5 quantidade={10} />
      <hr />
      <Exercicio5 quantidade={20} />
     </div>
 
      </div> 
      
    
    )      
}
