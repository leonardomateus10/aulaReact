import {Link} from"react-router-dom";

export default  function  Ceara()
{
  return(
    <div>
      <h1>Estado do ceará</h1>

      <div className="conteudo">

        <img src="/CE.png" />

       <p>
       O Ceará é um estado localizado na Região Nordeste do Brasil. Sua capital é Fortaleza, uma cidade conhecida por suas belas
        praias e forte atividade turística. O estado possui paisagens naturais variadas, com praias, dunas e serras. O Ceará 
        também se destaca por sua cultura, artesanato, festas tradicionais e culinária típica.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}