import {Link} from"react-router-dom";

export default  function Distritofederal ()
{
  return(
    <div>
      <h1>Estado de são paulo</h1>

      <div className="conteudo">

        <img src="/DF.png" />

       <p>
         O Distrito Federal está localizado na região Centro-Oeste do Brasil e tem como capital Brasília, que também é a capital do país.
         Criado para abrigar a sede do governo brasileiro, o Distrito Federal reúne importantes órgãos públicos, como o Congresso
         Nacional, o Palácio do Planalto e o Supremo Tribunal Federal. Brasília é conhecida por sua arquitetura moderna, planejada 
         pelo urbanista Lúcio Costa e pelo arquiteto Oscar Niemeyer. Além de sua importância política, o Distrito Federal possui
         áreas de natureza, parques e uma rica diversidade cultural,
         sendo um lugar muito importante para a história e o desenvolvimento do Brasil.
        </p>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}