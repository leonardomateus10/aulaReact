import {Link} from "react-router-dom";
import "../App.css";

export default  function  Home()
{
  return(
    <div>
      <h1>Aula 03 -Estudos de Rotas</h1>

      <div className="conteudo">

        <h3>região sudeste</h3>
        <ul>
          <li> <Link to="/estados/sp">São Paulo</Link></li>
          <li> <Link to="/estados/mg">minas gerais</Link></li>
          <li> <Link to="/estados/rj">rio de janeiro</Link></li>
          <li> <Link to="/estados/es"> espirito santo</Link></li>
        </ul>

      </div>

      <div className="conteudo">
        <h3>Regiao sul</h3>

        <ul>
            <li> <Link to="/estados/pr"> paraná</Link></li>
            <li> <Link to="estados/sc"> santa catarina</Link></li> 
            <li> <Link to="estados/rs"> rio grande do sul</Link></li>
        </ul>

      </div>

      <div className="conteudo">
        <h3>regiao centro oeste</h3>

        <ul>
        <li> <Link to="/estados/go"> goias</Link></li>
            <li> <Link to="estados/mt">mato grosso</Link></li> 
            <li> <Link to="estados/ms"> mato grosso do sul </Link></li>
        </ul>

      </div>

      <div className="conteudo">
        <h3>regiao norte</h3>

        <ul>
        <li> <Link to="/estados/ac"> acre</Link></li>
            <li> <Link to="estados/ap">amapá</Link></li> 
            <li> <Link to="estados/am"> amazonas </Link></li>
            <li> <Link to="estados/pa"> pará </Link></li>
            <li> <Link to="estados/ro"> rondõnia </Link></li>
            <li> <Link to="estados/rr"> roraima </Link></li>
            <li> <Link to="estados/to"> tocantins </Link></li>

        </ul>
      </div>

      <div className="conteudo">
        <h3>região nordeste</h3>
        <ul>
        <li> <Link to="/estados/ma"> marnhão</Link></li>
            <li> <Link to="estados/pi">piaui</Link></li> 
            <li> <Link to="estados/ce"> ceará </Link></li>
            <li> <Link to="estados/rn"> rio grande do norte </Link></li>
            <li> <Link to="estados/pb"> paraiba</Link></li>
            <li> <Link to="estados/pe"> pernanbuco </Link></li>
            <li> <Link to="estados/al"> alagoas </Link></li>
            <li> <Link to="estados/se"> sergipe </Link></li>
            <li> <Link to="estados/ba"> bahia</Link></li>


        </ul>
      </div>
      


      </div>

 
  );
}