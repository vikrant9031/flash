import React from 'react';
import Tilt from 'react-tilt';
import login from './login.png';
const Logo=()=>{
return(
<div className="ma3 mt0">
<Tilt className='Tilt br2 shadow-2' options={{max:55} } style={{height:150,width:150,marginLeft:540}}>
<div className="Tilt-inner" style={{background: 'linear-gradient(to left, rgb(255, 106, 106), rgb(128, 128, 0))',height:150,borderRadius:20,textAlign:'center'}}>
 <img style={{paddingTop:20,width:100}} src={login} alt="Login"/>
</div>
</Tilt>

</div>



	);
}
export default Logo;