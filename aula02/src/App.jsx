 import"./app.css";
 import Exemplo1 from "./Exemplo1";
 import Exercicio1 from "./exercicio1";
 import Exercicio2 from "./exercicio2";
 import Exercicio3 from "./exercicio3";
 export default function App()
{
  return(
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
        <h3>chamadas para o componente exercicio2</h3>
        <Exercicio2  peso ={80} altura ={1.80} />
        <hr />
        <Exercicio2 peso ={60} altura={1.60} />
     </div>

     </div>

 
  


  


  


  )
    

}
