import {Link} from"react-router-dom";

export default  function  MatoGrossodosul()
{
  return(
    <div>
      <h1>Estado do Mato Grosso do sul</h1>

      <div className="conteudo">

        <img src="/MS.png" />

       <p>
         Mato Grosso do Sul é um estado localizado na região Centro-Oeste do Brasil, tendo como capital a cidade de Campo Grande.
         O estado é conhecido por suas belas paisagens naturais e por abrigar parte do Pantanal, uma das maiores áreas alagadas
         do mundo, além do bioma Cerrado. Sua economia se destaca principalmente pela agricultura, pecuária e indústria. Mato 
         Grosso do Sul também possui importantes atrações turísticas, como Bonito, famoso por seus rios de águas cristalinas,
         cavernas e cachoeiras. Com sua rica biodiversidade, 
         cultura e natureza, o estado possui grande importância para o Brasil.
        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}