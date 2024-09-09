import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Atividade from "./atividades";
import PaginaErro from "./paginaErro";

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Atividade />} />


              <Route path='*' element={<PaginaErro />} />
         </Routes>
      </BrowserRouter>

    )

}