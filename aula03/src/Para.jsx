import {Link} from"react-router-dom";

export default  function  Pará()
{
  return(
    <div>
      <h1>Estado do pará</h1>

      <div className="conteudo">

        <img src="/PA.png" />

       <p>


        </p>
         O Pará é um estado localizado na Região Norte do Brasil, conhecido por sua rica cultura, grande biodiversidade e importantes
         rios. Sua capital é Belém, uma cidade que se destaca pela história, pela culinária e pelas manifestações culturais. 
         O estado possui uma grande área de Floresta Amazônica e abriga importantes rios, como o Rio Amazonas. Entre suas
         principais atrações estão a Ilha de Marajó, o Mercado Ver-o-Peso e as belas paisagens naturais. O Pará também é
         conhecido por sua culinária, com pratos como o açaí, o tacacá e o pato no tucupi, que fazem parte da identidade
         cultural paraense.
        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}