import {Link} from"react-router-dom";

export default  function  tocantins()
{
  return(
    <div>
      <h1>Estado de tocantins</h1>

      <div className="conteudo">

        <img src="/TO.png" />

       <p>
       Tocantins é um estado localizado na Região Norte do Brasil. Sua capital é Palmas. O estado é conhecido por suas belas paisagens
       naturais, como o Jalapão, com cachoeiras, dunas e rios de águas cristalinas. Tocantins também possui uma rica diversidade de 
       animais e plantas, além de importantes atividades agrícolas e culturais.
        </p>
           
        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}