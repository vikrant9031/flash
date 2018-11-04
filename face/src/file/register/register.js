import React from 'react';
import Fade from 'react-reveal/Fade';
import "./reg.css";
class Register extends React.Component{
  constructor(){
    super();
    this.state = {
      name:"",
      email:"",
      password: ""
    }
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value});
    console.log(this.state.email);
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
    console.log(this.state.email);
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value});
    console.log(this.state.password);
  }
  onDataSubmit=()=>{
   fetch('http://localhost:3001/register',{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    name:this.state.name,
    email:this.state.email,
    password:this.state.password
  })



  }).then(function(response){
    return response.json();
  }).then(data=>{
    if(data==="already exist"){
      alert("already exist");
    }else{
      this.props.register('home');
    }
  })
  }



  render(){
    const {register} = this.props;
    return(
    <Fade top  cascade>
      <article class="pa4 mh5 ph5" style={{paddingTop:150}} >

        <form id="box5" class="measure mt0  ph5 mv5 mh5  bg-black  w-30  ba b--white o-60 "   >
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <p class="f3 fw6 ph3 mh5 white" >Register</p>
            <div class="mt3" id="inputbox">
              <input  onChange={this.onNameChange}
              class="pa2 input-reset measure  w-100"
               type="text" name="name"  id="Name" required/>
               <label for="Name">Name</label>
            </div>
            <div class="mt3" id="inputbox">
              <input  onChange={this.onEmailChange}
              class="pa2 input-reset measure w-100" type="email" name="email-address"  id="email-address" required/>
              <label  for="email-address">Email</label>
            </div>
            <div class="mv3" id="inputbox">
              <input onChange={this.onPasswordChange}
              class="b pa2 input-reset  w-100"
            type="password" name="password"  id="password" required/>
              <label for="password">Password</label>
            </div>

          </fieldset>
          <div class="">
          <div  onClick={this.onDataSubmit}
          id="btn4">Sign Up</div>
          </div>

        </form>
      </article>
      </Fade>
    );

  }



}
export default Register;
