import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

function Header() {
  const logout =  async ()=>{
    const token = localStorage.getItem('authtoken');
    localStorage.removeItem('authtoken')
    const response = await axios.get('http://127.0.0.1:5003/v1/api/logout', {headers: {authtoken: token}});
    // console.log(response.data);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgb(249, 255, 253)"}}>
  <div class="container-fluid" style={{width: '1420px'}}>
    <a class="navbar-brand" href="#">Navbar</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <form class="d-flex">
        {localStorage.getItem('authtoken')?
        <>
        <button class="btn btn-outline-primary mx-1" type="submit">My Profile</button>
        <button class="btn btn-outline-primary mx-1" type="submit" onClick={logout}>Logout</button>
        </> :
        <>
        <Link to="/login"><button class="btn btn-outline-success mx-1" type="submit">Login</button></Link>
        <Link to="/signup"><button class="btn btn-outline-success mx-1" type="submit">Signup</button></Link>
        </>  }
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header