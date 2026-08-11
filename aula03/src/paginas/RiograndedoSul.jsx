import {Link} from"react-router-dom";

export default  function  RiograndedoSul()
{
  return(
    <div>
      <h1>Estado do Parana</h1>

      <div className="conteudo">

        <img src="/RS.png" />

       <p>
         O Rio Grande do Sul é um estado da Região Sul do Brasil e sua capital é Porto Alegre. É conhecido por suas belas paisagens, 
          pela cultura gaúcha e pelo tradicional chimarrão. Sua economia se destaca pela agricultura, pecuária, indústria e turismo.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}