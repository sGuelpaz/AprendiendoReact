import logo from './assets/images/logo.svg';
import './assets/css/App.css';


//Importar componentes

import MiComponente from'./components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (<div>
  <h2>Hola, soy {nombre}</h2>
  <h3>Tengo {edad} años</h3>
  </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Estiven Guelpaz";
  var presentacion = <h2>Hola, soy {nombre}</h2>

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Haciendo curso de react
        </p>
        {HolaMundo(nombre, 23)}
        {
          alert("Hola mundo con react!!")
        }
        
        <section className="componentes">

        <MiComponente />
        

      </section>

      </header>
      
    </div>
  );
}

export default App;
