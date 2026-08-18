import {Link} from"react-router-dom";

export default  function  Alagoas()
{
  return(
    <div>
      <h1>Estado de alagoas</h1>

      <div className="conteudo">

        <img src="/AL.png" />

       <p>
           
       Alagoas é um estado localizado na Região Nordeste do Brasil. Sua capital é Maceió, conhecida por suas belas praias e águas
       cristalinas. O estado possui paisagens naturais encantadoras, com praias, lagoas, rios e coqueirais. Alagoas também se
       destaca por sua cultura, culinária e tradições nordestinas.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}