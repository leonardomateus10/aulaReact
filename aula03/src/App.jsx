import {BrowserRouter, Routes ,Route} from "react-router-dom"

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Parana from "./paginas/Parana";
import SantaCatarina from "./paginas/SantaCatarina";
import RiograndedoSul from "./paginas/RiograndedoSul";
import Goias from "./paginas/Goias";
import MatoGrosso from "./paginas/Matogrosso";
import MatoGrossodosul from "./paginas/Matogrossodosul";
import Acre from "./paginas/Acre";
import Amapá from "./Amapa";
import Amazonas from "./Amazonas";
import Pará from "./Para";
import Rondonia from "./rondonia";
import Roraima from "./roraima";
import Tocantins from "./tocantins";
import Maranhao from "./paginas/Maranhao";
import Piaui from "./paginas/piaui";
import Ceara from "./paginas/Ceara";
import RiograndedoNorte from "./paginas/RioGrandedoNorte";
import Paraiba from "./paginas/Paraiba";
import Pernanbuco from "./paginas/Pernanbuco";
import Alagoas from "./paginas/Alagoas";
import Sergipe from "./paginas/Sergipe";
import Bahia from "./paginas/Bahia";



export default  function  App()
{
  return(
    <BrowserRouter>
       <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro/>} />
        <Route path="/estados/es" element={<EspiritoSanto/>} />
        <Route path="/estados/pr" element={<Parana/>} />
        <Route path="/estados/sc" element={<SantaCatarina/>} />
        <Route path="/estados/rs" element={<RiograndedoSul/>} />
        <Route path="/estados/go" element={<Goias/>} />
        <Route path="/estados/mt" element={<MatoGrosso/>} />
        <Route path="/estados/ms" element={<MatoGrossodosul/>} />
        <Route path="/estados/ac" element={<Acre/>} />
        <Route path="/estados/ap" element={<Amapá/>} />
        <Route path="/estados/am" element={<Amazonas/>} />
        <Route path="/estados/pa" element={<Pará/>} />
        <Route path="/estados/ro" element={<Rondonia/>} />
        <Route path="/estados/rr" element={<Roraima/>} />
        <Route path="/estados/to" element={<Tocantins/>} />

        <Route path="/estados/ma" element={<Maranhao/>} />
        <Route path="/estados/pi" element={<Piaui/>} />
        <Route path="/estados/ce" element={<Ceara/>} />
        <Route path="/estados/rn" element={<RiograndedoNorte/>} />
        <Route path="/estados/pb" element={<Paraiba/>} />
        <Route path="/estados/pe" element={<Pernanbuco/>} />
        <Route path="/estados/al" element={<Alagoas/>} />
        <Route path="/estados/se" element={<Sergipe/>} />
        <Route path="/estados/ba" element={<Bahia/>} />
       

    



       </Routes>
    </BrowserRouter>
   
  );
}