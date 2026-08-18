import {Link} from"react-router-dom";

export default  function  Acre()
{
  return(
    <div>
      <h1> estado do acre</h1>

      <div className="conteudo"> 

        <img src="/AC.png" /> 

        <p>
         O Acre é um estado localizado na Região Norte do Brasil e sua capital é Rio Branco. O estado faz fronteira com o Amazonas, 
         Rondônia, Peru e Bolívia. O Acre é conhecido por sua rica natureza, com grande parte de seu território coberto pela Floresta
         Amazônica. Sua economia é baseada principalmente na agricultura, pecuária e extrativismo. O estado também é famoso pela 
         história de Chico Mendes, importante defensor da preservação da Amazônia.
         O Acre possui uma cultura rica e grande importância para a preservação ambiental do Brasil.
        </p>
        
        <p>
          <Link to="/">voltar </Link>
        </p>

      </div>
    </div>
  );
}