import {Link} from"react-router-dom";

export default  function  SaoPaulo()
{
  return(
    <div>
      <h1>Estado de são paulo</h1>

      <div className="conteudo">

        <img src="/SP.png" />

       <P>
        estado de São Paulo está localizado na região Sudeste do Brasil e é o mais populoso e um dos mais desenvolvidos do país.
        Destaca-se por sua forte economia, baseada na indústria, no comércio, na agricultura e na prestação de serviços. Sua 
        capital, a cidade de São Paulo, é considerada o principal centro financeiro da América Latina e reúne grande diversidade
        cultural, com influências de povos de diferentes partes do mundo. Além da importância econômica, o estado possui rica
        variedade de paisagens, que incluem praias, serras, áreas de Mata Atlântica e cidades históricas. São Paulo também se 
        destaca pela ampla oferta de universidades, centros de pesquisa, eventos culturais e infraestrutura, desempenhando um 
        papel fundamental no desenvolvimento econômico, social e cultural do Brasil.
        </P>

        <p>
          <Link to="/">voltar </Link>
        </p>


      </div>

    </div>
  );
}