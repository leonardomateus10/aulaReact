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



    </div>
  );
}