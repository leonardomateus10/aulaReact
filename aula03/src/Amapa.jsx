import {Link} from"react-router-dom";

export default  function  Amapá()
{
  return(
    <div>
      <h1> estado do amapá</h1>

      <div className="conteudo"> 

        <img src="/AP.png" /> 

        <p>
        O Amapá é um estado localizado na Região Norte do Brasil, conhecido por sua rica biodiversidade, suas belezas naturais
        e sua cultura diversificada. Sua capital é Macapá, uma cidade situada às margens do Rio Amazonas e famosa por ser 
        cortada pela Linha do Equador. O estado possui grandes áreas de floresta amazônica, rios e unidades de conservação, 
        além de uma população formada por diferentes influências culturais. Entre seus principais destaques estão o Parque
        Nacional Montanhas do Tumucumaque, o Marco Zero do Equador e as tradicionais manifestações culturais.
        O Amapá é, portanto, um lugar de grande importância ambiental, cultural e histórica para o Brasil.
        </p>
        
        <p>
          <Link to="/">voltar </Link>
        </p>

      </div>
    </div>
  );
}