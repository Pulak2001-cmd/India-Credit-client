import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Intro from './components/Intro';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route,Link,Routes,Navigate} from 'react-router-dom'
import Profile from './components/Profile';
import Register_seller from './components/Register_seller';


function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<><Header/> <Intro/> <Cards/></>}>
          
          </Route>
        </Routes>
        <Routes>
        <Route path="signup" element={<Register/>}>
          
          </Route>
        </Routes>
        <Routes>
        <Route path="login" element={<Login/>}>
          
          </Route>
        </Routes>
        <Routes>
          <Route path="/user/profile" element={<><Header /><Profile/></>} />
        </Routes>
        <Routes>
          <Route path="/user/service" element={<><Header /><Register_seller/></>} />
        </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
