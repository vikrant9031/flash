import React from 'react';
const Navigation = ({onRoutechange,isSign})=>{
	
	
		if(isSign){
			return(
      <nav style={{display:'flex',justifyContent:'flex-end'}}>
      <p className="f3 link dim black pa3 pointer" onClick={()=>onRoutechange('signout')}> Sign Out</p>  
      </nav>

				);
		}else{
			return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
      <p className="f3 link dim black pa3 pointer" onClick={()=>onRoutechange('signin')}> Sign In</p>  
      <p className="f3 link dim black pa3 pointer" onClick={()=>onRoutechange('register')}>Register</p>  
      </nav>
      );
		}
		

      
  
		
}

export default Navigation;