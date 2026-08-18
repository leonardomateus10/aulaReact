import {Link} from"react-router-dom";

export default  function  Piaui()
{
  return(
    <div>
      <h1>Estado do piaui</h1>

      <div className="conteudo">

        <img src="/PI.png" />

       <p>
        O Piauí é um estado localizado na Região Nordeste do Brasil. Sua capital é Teresina, conhecida como a “Cidade Verde”.
        O estado possui belas paisagens naturais, como o Parque Nacional da Serra da Capivara, famoso por suas pinturas 
        rupestres. O Piauí também se destaca pela agricultura, pela cultura e pela culinária típica.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}