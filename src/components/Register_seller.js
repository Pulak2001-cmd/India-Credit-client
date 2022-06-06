import React, { Component } from 'react';
import Profilecard from './Profilecard';

export class register_seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      shop_name: '',
      page: 1,
    }
  }
  register= ()=>{
    this.setState({page: 2});
    localStorage.setItem('isServiceProvider', true);
  }
  componentDidMount(){
    if(localStorage.getItem('isServiceProvider')){
      this.setState({page: 2});
    }
  }
  render() {
    return (
      <div>
        <div className="container" style={{display: 'flex', flexDirection: 'row'}}>
        <Profilecard src="./Image1.png" title={"Pulak"}/>
      {this.state.page === 1 &&
     <div className="container1 mx-5 my-3" style={{height: "30em", width:"40em", marginTop: "5em", flexDirection: 'column'}}>
      
       <h1 className="heading" style={{textAlign: "center"}}>Register Seller</h1>
       <p style={{textAlign: "center"}}>Add information about Your Shop</p>
       <div style={{ flexDirection: "column", alignItems: "center", marginTop: "30px"}}>
         <input type="text" value={this.state.email} style={{padding: '8px', margin: '10px'}} placeholder="Enter your email Id" onChange={(e)=> this.setState({email: e.target.value})}/>
         <input type="text" value={this.state.phone} style={{padding: '8px', margin: '10px'}} placeholder="Enter your Phone" onChange={(e)=> this.setState({phone: e.target.value})}/>
         <input type="text" value={this.state.shop_name} style={{padding: '8px', margin: '10px'}} placeholder="Enter your Shop Name" onChange={(e)=> this.setState({shop_name: e.target.value})}/>
       </div>
       <button className="btn btn-primary" style={{borderRadius: '9px', padding: '10px', margin: '10px'}} onClick={this.register}>Register Your Shop</button>
     </div>}
     {this.state.page === 2 &&
      <div >
        <h1 className="heading">Services</h1>
        <div style={{marginTop: "10px", flexDirection: 'column', flex: 1}}>
          <div>Manage Business</div>
          <div>Offline Section</div>
          <div>Online Section</div>
        </div>
      </div>
    }
    </div> 
      </div>
    )
  }
}

export default register_seller