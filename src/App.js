import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Cards from './components/Cards';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Cards/>
    </div>
  );
}

export default App;
