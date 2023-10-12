import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Italo'
  const newName = name.toUpperCase()

  function soma(a, b){
    return a + b
  }
  return (
    <div className="App">
      <h1>Hello {newName}</h1>
      <p>Soma: {soma(1, 2)}</p>
    </div>
  );
}

export default App;
