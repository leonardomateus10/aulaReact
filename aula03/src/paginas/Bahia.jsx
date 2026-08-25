import {Link} from"react-router-dom";

export default  function  Bahia()
{
  return(
    <div>
      <h1>Estado da bahia</h1>

      <div className="conteudo">

        <img src="/BA.png" />

       <p>
        A Bahia é um estado localizado na Região Nordeste do Brasil. Sua capital é Salvador, uma cidade conhecida por sua história,
        cultura e belas praias. O estado possui uma grande diversidade de paisagens, com praias, cachoeiras e áreas de vegetação.
        A Bahia também se destaca pela música, pelas festas populares,
        pela culinária típica e pela forte influência da cultura afro-brasileira.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}