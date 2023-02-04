import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
  <Navbar/>
  <ItemListContainer greeting=
  {"PTools - las mejores herramientas para expertos como tú"}/>
  <button className="btn btn-success">Visita nuestros catálogos</button>
  </>
  
  )
}

export default App;
