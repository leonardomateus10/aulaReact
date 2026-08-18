import {Link} from"react-router-dom";

export default  function  Paraiba()
{
  return(
    <div>
      <h1>Estado da paraiba</h1>

      <div className="conteudo">

        <img src="/PB.png" />

       <p>
        A Paraíba é um estado localizado na Região Nordeste do Brasil. Sua capital é João Pessoa, conhecida por suas belas praias e por
        ser uma das cidades mais antigas do Brasil. O estado possui paisagens naturais, rica cultura, festas tradicionais e uma
        culinária típica bastante apreciada. A Paraíba também se destaca por suas praias,
        como Tambaú e Cabo Branco.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}