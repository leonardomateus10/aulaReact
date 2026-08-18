import {Link} from"react-router-dom";

export default  function  Rondonia()
{
  return(
    <div>
      <h1>Estado de rondonia</h1>

      <div className="conteudo">

        <img src="/RO.png" />

       <p>
       Rondônia é um estado localizado na Região Norte do Brasil. Sua capital é Porto Velho. O estado possui grande riqueza 
       natural, com áreas da Floresta Amazônica, rios e uma grande diversidade de animais e plantas. Rondônia também se
        destaca pela agricultura, pecuária e pela diversidade cultural de sua população.

        </p>
           
        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}