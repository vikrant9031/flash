import React from 'react';
class  Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signEmail:"",
			signPassword:""

		}
	}

onSignEmail = (event)=>{
this.setState({signEmail:event.target.value})
}
   
   onSignPassword = (event)=>{
this.setState({signPassword:event.target.value})
} 
onSubmitSign = () => {
	var res = 0;
fetch('http://localhost:3000/log',{
	method:"post",
	headers:{'Content-Type':'application/json'},
	body:JSON.stringify({
		email:this.state.signEmail,
		password:this.state.signPassword
	})
}).then(response=>response.json()).
then(data=>{
	console.log(data);
	if(data =="success"){
		res= 1;
		console.log(res);
		this.props.onRoutechange("home")
	}
})


console.log(res);

this.props.onRoutechange("register")




	


}






	render(){
		const {onRoutechange} = this.props;
		return(
		  <article className="br2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-1">
		  <main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input onChange={this.onSignEmail} 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-300" 
		        type="email" name="email-address"  
		        id="email-address"/>
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input onChange={this.onSignPassword}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-200"
		         type="password" 
		          name= "password"  
		           id="password"/>
		      </div>
		     
		      </fieldset>
		      <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
		      type="submit" value="Sign in" 
		      onClick={this.onSubmitSign }
		      />
				    </div>
				    <div className="lh-copy mt3">
		      <p  class="f6 link dim black db" onClick={()=>onRoutechange('register')}>Sign up</p>
		      
		    </div>
		  </form>
		</main>
		</article>



      
		)
	}
	
}

export default Login;