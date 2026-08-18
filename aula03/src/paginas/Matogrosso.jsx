import {Link} from"react-router-dom";

export default  function  MatoGrosso()
{
  return(
    <div>
      <h1>Estado de mato grosso </h1>

      <div className="conteudo">

        <img src="/MT.png" />

       <p>
       Mato Grosso é um estado localizado na região Centro-Oeste do Brasil, conhecido por sua grande diversidade natural e por abrigar 
       importantes biomas, como o Pantanal, o Cerrado e parte da Amazônia. Sua capital é Cuiabá, uma cidade marcada por sua história 
       e cultura. O estado também se destaca pela produção agrícola e pecuária, sendo um dos principais produtores de soja, milho e 
       algodão do país. Além de sua importância econômica, Mato Grosso possui belas paisagens, rios, cachoeiras e uma rica variedade
       de animais e plantas, tornando-se um lugar de grande 
       importância para o turismo e para a preservação ambiental.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}