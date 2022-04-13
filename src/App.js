import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Intro from './components/Intro';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route,Link,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<><Header/> <Intro/> <Cards/></>}>
          
          </Route>
        </Routes>
        <Routes>
        <Route path="/signup" element={<Register/>}>
          
          </Route>
        </Routes>
        <Routes>
        <Route path="/login" element={<Login/>}>
          
          </Route>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
