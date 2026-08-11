import {Link} from"react-router-dom";

export default  function  MatoGrosso()
{
  return(
    <div>
      <h1>Estado de são paulo</h1>

      <div className="conteudo">

        <img src="/MT.png" />

       <p>
       Goiás é um estado da Região Centro-Oeste do Brasil e sua capital é Goiânia. É conhecido por suas belas paisagens, cachoeiras 
       e pela cultura sertaneja. Sua economia se destaca pela agricultura, pecuária, indústria e turismo.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}