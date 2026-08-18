import {Link} from"react-router-dom";

export default  function  Sergipe()
{
  return(
    <div>
      <h1>Estado do sergipe</h1>

      <div className="conteudo">

        <img src="/SE.png" />

       <p>
        Sergipe é um estado localizado na Região Nordeste do Brasil. Sua capital é Aracaju, conhecida por suas belas praias e pelo
        clima agradável. O estado é o menor do Brasil em extensão territorial, mas possui uma rica cultura e belas paisagens
        naturais. Sergipe também se destaca pela culinária, pelas festas tradicionais
        e pelo turismo.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}