import { BrowserRouter as Router, Switch, Routes, Route, Container, Link } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/newproject' element={<NewProject />} />
      </Routes>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
