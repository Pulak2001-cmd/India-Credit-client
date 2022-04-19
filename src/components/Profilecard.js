import React,{Fragment} from 'react'
import '../Profilecard.css'

function Profilecard(props) {
  return (
    <Fragment>
         <div class="card my-4 mx-4" style={{height:"37rem", width: "14rem", }}>
    <img src={props.src} class="card-img-top" alt="..."/>
    <profile/>
    <div class="card-body">
      <h5 class="card-title" style={{textAlign:"center"}}>{props.title}</h5><br />
      <p class="card-text abc">Profile</p>
      <p class="card-text abc">Photo</p>
      <p class="card-text abc">Payment Methods</p>
      <p class="card-text abc">Privacy</p>
      <p class="card-text abc">Close Account</p>
      
    </div>
  </div>
    </Fragment>
  )
}

export default Profilecard