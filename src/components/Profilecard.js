import React,{Fragment} from 'react'
import '../Profilecard.css';
import {Link, Navigate} from 'react-router-dom';

function Profilecard(props) {
  return (
    <Fragment>
         <div class="card my-4 mx-4" style={{height:"37rem", width: "14rem", }}>
    <img src={props.src} class="card-img-top" alt="..."/>
    <profile/>
    <div class="card-body">
      <h5 class="card-title" style={{textAlign:"center"}}>{props.title}</h5><br />
      <Link to="/user/profile"><p class="card-text abc">Profile</p></Link>
      <p class="card-text abc">Photo</p>
      <Link to="/user/service"><p class="card-text abc">My Service</p></Link>
      <p class="card-text abc">Privacy</p>
      <p class="card-text abc">Close Account</p>
      
    </div>
  </div>
    </Fragment>
  )
}

export default Profilecard