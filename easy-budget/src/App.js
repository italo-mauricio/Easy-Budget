import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {

  const name = 'Italo'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function soma(a, b){
    return a + b
  }
  return (
    <div className="App">
      <h1>Hello {newName}</h1>
      <p>Soma: {soma(1, 2)}</p>
      <img src={url} alt="My Image" />
      <Hello />
    </div>
  );
}

export default App;
