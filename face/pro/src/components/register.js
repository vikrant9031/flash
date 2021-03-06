import React from 'react';
class  Register extends React.Component{

	constructor(){
		super();
		this.state={
			signUpEmail:"",
			signUpPassword:"",
			name:""

		}
	}

	onEmail = (event)=>{
this.setState({signUpEmail:event.target.value})
}
	onName = (event)=>{
this.setState({name:event.target.value})
}
   
 onPassword = (event)=>{
this.setState({signUpPassword:event.target.value})
} 
onSubup = () => {

fetch('http://localhost:3000/register',{
	method:"post",
	headers:{'Content-Type':'application/json'},
	body:JSON.stringify({
		email:this.state.signUpEmail,
		name :this.state.name,
		password:this.state.signUpPassword
	})
})


this.props.onRoutechange('home');
console.log(this.state);


	


}



	render(){
		const {onRoutechange} = this.props;
	return(

    		<article className="br2 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-2">
<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0" style={{color:'white'}}>Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input onChange={this.onEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-300" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input onChange={this.onPassword} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-200" type="password" name="password"  id="password"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="name">Name</label>
        <input onChange={this.onName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-200" type="text" name="Name"  id="name"/>
      </div>
     
    </fieldset>
    <div>
      <input onClick={this.onSubup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
    
  </form>
</main>
</article>
		)



		}

}

export default Register;