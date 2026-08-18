import {Link} from"react-router-dom";

export default  function  Amazonas()
{
  return(
    <div>
      <h1>Estado de amazonas</h1>

      <div className="conteudo">

        <img src="/AM.png" />

       <p>
        O Amazonas é um estado localizado na Região Norte do Brasil e possui a maior área territorial entre os estados brasileiros.
        Sua capital é Manaus, uma cidade conhecida por sua importância histórica, cultural e econômica. O estado abriga uma
        grande parte da Floresta Amazônica, com uma enorme diversidade de animais e plantas, além de importantes rios, como
        o Rio Amazonas e o Rio Negro. Entre seus principais pontos turísticos estão o Teatro Amazonas, o Encontro das Águas 
        e diversas áreas de preservação ambiental. O Amazonas é muito importante para o Brasil por sua riqueza natural,
        cultural e ambiental.

        </p>
           
        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}