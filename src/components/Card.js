import React,{Fragment} from 'react'

function Card(props) {
  return (
    <Fragment>
         <div class="card" style={{width: "18rem"}}>
    <img src={props.src} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.text}</p>
      <a href="#" class="btn btn-primary">{props.btn}</a>
    </div>
  </div>
    </Fragment>
  )
}

export default Card
