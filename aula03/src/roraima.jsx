import {Link} from"react-router-dom";

export default  function  roraima()
{
  return(
    <div>
      <h1>Estado de roraima</h1>

      <div className="conteudo">

        <img src="/RR.png" />

       <p>
        Roraima é um estado localizado na Região Norte do Brasil. Sua capital é Boa Vista. O estado possui belas paisagens
        naturais, com destaque para o Monte Roraima e grandes áreas de savana e floresta. Roraima também apresenta uma rica
        diversidade cultural, com forte presença de povos indígenas.
        </p>
           
        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}