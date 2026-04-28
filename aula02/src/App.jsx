 import"./app.css";
 import Exemplo1 from "./Exemplo1";
 export default function App()
{
  return (
    <div>
      <h1>aula 02 - criação de componentes</h1>
      
     <div className="card">
      <h3>chamadas para o componente  esxemplo 1</h3>

      <exemplo1 numero1={10} numero2={20}/>

     </div>

    </div>
  )
}
