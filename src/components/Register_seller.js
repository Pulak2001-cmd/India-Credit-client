import React, { Component } from 'react';
import Profilecard from './Profilecard';

export class register_seller extends Component {
  render() {
    return (
        <div className="container" style={{display: 'flex', flexDirection: 'row'}}>
        <Profilecard src="./Image1.png" title={"Pulak"}/>
     <div className="container1 mx-5 my-3" style={{height: "30em", width:"40em", marginTop: "5em"}}>
      
       <h1 className="heading" style={{textAlign: "center"}}>Register Seller</h1>
       <p style={{textAlign: "center"}}>Add information about Your Shop</p>
         
     </div>
     </div>
    )
  }
}

export default register_seller