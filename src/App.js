//Importar Componentes
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

//Importar Librería CSS
import "bulma/css/bulma.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Welcome to GOAT. The best online shoe store.'} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App