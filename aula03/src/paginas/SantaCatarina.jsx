import {Link} from"react-router-dom";

export default  function  SantaCatarina()
{
  return(
    <div>
      <h1>Estado de santa catarina</h1>

      <div className="conteudo">

        <img src="/SC.png" />

       <p>
          Santa Catarina é um estado da Região Sul do Brasil e sua capital é Florianópolis. O estado é conhecido por suas belas praias, 
          paisagens naturais e cidades com influência europeia. Sua economia se destaca pela agricultura, indústria, turismo e comércio.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}