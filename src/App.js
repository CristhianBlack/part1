import './App.css';
import Mensaje from './Mensaje.js';



function Description(){
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {
  const mensaje = 'Hola Mundo desde variable'
  const a =2
  const b = 3
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='yellow' message='De React'/>
    
      <Description/>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a+b}
      </div>
      {mensaje}
      <br/>
      {+new Date()}
    </div>
  );
}

export default App;
