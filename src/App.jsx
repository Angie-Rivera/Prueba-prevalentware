import './estilos/estilos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './paginas/Index.jsx'
import './estilos/estiloCard.css';
import Empresas from './paginas/Empresas.jsx';
import Aprobacion from './paginas/Aprobacion.jsx';
import { ApolloProvider,  ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
   <ApolloProvider client={client}> 
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Index/>}></Route>
      <Route path='/formulario' element={<Empresas />}></Route> 
      <Route path='/admin' element={<Aprobacion />}></Route>
    </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
