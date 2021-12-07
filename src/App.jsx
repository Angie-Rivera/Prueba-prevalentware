import './estilos/estilos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './paginas/Index.jsx'
import './estilos/estiloCard.css';
import Formulario from './paginas/Formulario';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Index/>}>
      </Route>
      <Route path='/formulario' element={<Formulario />}>
      </Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
