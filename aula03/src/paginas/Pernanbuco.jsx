import {Link} from"react-router-dom";

export default  function  Pernanbuco()
{
  return(
    <div>
      <h1>Estado de pernanbuco</h1>

      <div className="conteudo">

        <img src="/PE.png" />

       <p>
        Pernambuco é um estado localizado na Região Nordeste do Brasil. Sua capital é Recife, conhecida por suas belas praias,
        rios e rica história. O estado possui uma cultura muito diversificada, com destaque para o frevo, o maracatu e o
        famoso Carnaval de Olinda. Pernambuco também é conhecido por suas praias paradisíacas, como as de Porto de Galinhas
         e Fernando de Noronha.


        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}