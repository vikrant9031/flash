import React from 'react';
import Fade from 'react-reveal/Fade';
import "./sign.css";


class Sign extends React.Component{
constructor(){
  super();
  this.state = {
    email:"",
    password: ""
  }
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

 fetch('http://localhost:3001/sign',{
method:'post',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
  email:this.state.email,
  password:this.state.password
})



}).then(function(response){
  return response.json();
}).then(data=>{
  if(data[0].email === this.state.email){
  sessionStorage.setItem('id',JSON.stringify(data[0].sid));
    this.props.login('home');


  }else{
    this.props.login('signin');
  }

})

}

  render(){
    const {login,onChange} = this.props;
    return(

    <Fade top  cascade>
      <article class="pa4 mh0 " style={{paddingTop:150,marginLeft:20}} >

        <form id="box4" class="measure mt5 pv1 ph5 mv5 mh0 w-30  "
          name="Form">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <p class="f3 fw6 ph3 mh5 white" >Sign In</p>
            <div className=" mt3" id="inputbox">

              <input onChange={this.onEmailChange}
              class="pa2   bg-transparent  w-100"
                type="text" name="" required/>
              <label>Username</label>
            </div>
            <div className=" mv3" id="inputbox">

              <input onChange={this.onPasswordChange}
              class="b pa2 input-reset  bg-transparent w-100"
               type="password" name="" required/>
              <label>Password</label>
            </div>

          </fieldset>
          <div class="">
            <div  onClick={this.onDataSubmit} id="btn4">Sign In</div>
          </div>

        </form>
      </article>
      </Fade>
    );




  }


}

export default Sign;
