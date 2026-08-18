import {Link} from"react-router-dom";

export default  function  RiograndedoNorte()
{
  return(
    <div>
      <h1>Estado do Rio Grande do norte</h1>

      <div className="conteudo">

        <img src="/RN.png" />

       <p>
        O Rio Grande do Norte é um estado localizado na Região Nordeste do Brasil. Sua capital é Natal, conhecida por suas belas praias,
        dunas e paisagens naturais. O estado também se destaca pelo turismo, pela produção de sal e pela cultura nordestina. Entre seus 
        principais pontos turísticos estão as praias de Ponta Negra e Genipabu.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}