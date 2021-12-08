import './estilos/estilos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './paginas/Index.jsx'
import './estilos/estiloCard.css';
import Empresas from './paginas/Empresas.jsx';
import Aprobacion from './paginas/Aprobacion.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Index/>}></Route>
      <Route path='/formulario' element={<Empresas />}></Route> 
      <Route path='/admin' element={<Aprobacion />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
