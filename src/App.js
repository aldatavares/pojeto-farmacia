import logo from './logo.svg';
import './App.css';
import Medicamento from './components/Content/content';
import Farmacia from './components/Header/header';
import Drogaria from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Farmacia/>
      <Medicamento/>
      <Drogaria/>
    </div>
  );
}

export default App;
