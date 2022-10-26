import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import Despartamentos from './components/Despartamentos';
import CreateDepartamento from './components/CreateDepartamento';
import Router from './Router';

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
