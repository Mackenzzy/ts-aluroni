import Cabecalho from "components/Cabecalho";
import Footer from "components/Footer";
import Menu from "components/Menu";
import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Sobre from "pages/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<Cabecalho/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>    
                        <Route path='sobre' element={<Sobre/>}/>                
                    </Route>                    
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
}