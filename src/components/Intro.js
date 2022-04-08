import React,{Fragment} from 'react'

function Intro() {
  return (
    <Fragment>
        <div class="container my-2">
  <div class="row">
    <div class="col" style={{textAlign: "left", width:"100px"}}>
      <h5 style={{fontFamily: "Open Sans"}}>Free forever tool for SME Digitization</h5><br/>
      <p style={{color: "Green", fontSize:"50px",fontFamily: "Anton"}}>Digitizing normal <br/> SMEs into extraordinary businesses</p>
      <br/><br/>
      <p>For Indian SME manufacturers, TranZact is a zero-effort digital transformation tool that digitizes your entire business process right from sales inquiry to dispatch.</p>
      <button type="button" class="btn btn-success" style={{borderRadius:"4px"}}>Free Sign Up</button>
    </div>
    <div class="col">
    <img src="./Image1.png" class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
    </Fragment>
  )
}

export default Intro