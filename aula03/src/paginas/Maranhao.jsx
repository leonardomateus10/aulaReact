import {Link} from"react-router-dom";

export default  function  Maranhao()
{
  return(
    <div>
      <h1>Estado do Maranhao </h1>

      <div className="conteudo">

        <img src="/MA.png" />

       <p>
        O Maranhão é um estado localizado na Região Nordeste do Brasil. Sua capital é São Luís, uma cidade conhecida por sua história, 
        e belas construções coloniais. O estado possui paisagens variadas, como praias, rios e os famosos Lençóis Maranhenses. O
        Maranhão também se destaca por sua rica cultura, com festas tradicionais, músicas e comidas típicas.

        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}