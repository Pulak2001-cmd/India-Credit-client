import React, { Component } from 'react';
import axios from 'axios';
import Profilecard from './Profilecard';

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            phone: "",
            id: 0,
            btndisabled: true,
        }
    }
    async componentDidMount(){
        const response = await axios.get('http://localhost:5003/v1/api/profile', {headers: {authtoken: localStorage.getItem('authtoken')}});
        console.log(response.data.id);
        this.setState({user_name: response.data.name, email: response.data.email, phone: response.data.phone, id: response.data.id});
        localStorage.setItem('isServiceProvider', true);
    }
    handleName = (e)=>{
        if(e.target.value !== this.state.user_name){
            this.setState({btndisabled: false});
        }
        else{
            this.setState({btndisabled: true});
        }
        this.setState({user_name: e.target.value});
    }
    profileSubmit = async ()=>{
        const profileData = {
            user_name: this.state.user_name,
        }
        const response = await axios.post('http://localhost:5003/v1/api/updateprofile', profileData, {headers: {'authtoken': localStorage.getItem('authtoken')}});
        this.setState({btndisabled: true});
    }
  render() {
    return (
      <div className="container" style={{display: 'flex', flexDirection: 'row'}}>
         <Profilecard src="./Image1.png" title={this.state.user_name}/>
      <div className="container1 mx-5 my-3" style={{height: "30em", width:"40em", marginTop: "5em"}}>
       
        <h1 className="heading" style={{textAlign: "center"}}>Public Profile</h1>
        <p style={{textAlign: "center"}}>Add information about yourself</p>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={this.handleName} placeholder="Enter Your Name Here" value={this.state.user_name}></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Email Address</label>
            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter your email address" value={this.state.email}></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput3" class="form-label">Phone</label>
            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Enter your phone Number" value={this.state.phone}></input>
          </div>
          
          <div style={{margin: 'auto'}}>
          <button className="btn btn-outline-primary" disabled={this.state.btndisabled} onClick={this.profileSubmit}>Save</button>
          </div>
      </div>
      </div>
    )
  }
}

export default Profile