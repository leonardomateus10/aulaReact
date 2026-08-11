import {Link} from"react-router-dom";

export default  function  MinasGerais()
{
  return(
    <div>
      <h1> Estado de Minas Gerais</h1>
      <div className="conteudo">

        <img src="/MG.png" />

        <p>
        O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua rica história, cultura e tradições.
       Possui um dos maiores territórios e populações do país, destacando-se pela produção de café, leite, queijo, minério de ferro 
       e outros recursos minerais. Sua capital, Belo Horizonte, é um importante centro econômico, cultural e educacional. Minas
       Gerais também é famosa por suas cidades históricas, como Ouro Preto, Tiradentes e Diamantina, que preservam importantes
       construções do período colonial. Além disso, o estado oferece belas paisagens naturais, com serras, cachoeiras e parques,
       sendo um destino muito procurado por turistas interessados em história, gastronomia e ecoturismo.
        </p>

           
        <p>
          <Link to="/">voltar </Link>
        </p>




      </div>


    </div>
  );
}