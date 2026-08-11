import {Link} from"react-router-dom";

export default  function  Parana()
{
  return(
    <div>
      <h1>Estado do Parana</h1>

      <div className="conteudo">

        <img src="/PR.png" />

       <p>
        O Paraná é um estado da Região Sul do Brasil e sua capital é Curitiba. Conhecido por suas belas paisagens, como as Cataratas
        do Iguaçu, o estado possui uma economia forte baseada na agricultura, indústria e comércio. Sua cultura é marcada pela
        influência de diferentes povos e tradições.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}