import logo from './logo.svg';
import './App.css'; 

function App() {
  return(
    <div id="center">
      <div className="container">
        <div className="msgUsers">
        <input className="usuario" type="text" placeholder={"Usuário"} />
        <input className="mensagem" type="text" placeholder={"Mensagem"} />
        <input className="btn" type="button" value={"Enviar"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
