import React from 'react';
import "./nav.css";
import Zoom from 'react-reveal/Zoom';
const Navigation =({sign})=>{
return(

<div >

<nav className="nav bg-white w-100 o-50" style={{position:'fixed',height:60 }} id='grass'>
<Zoom left cascade><p id="sig"  onClick={()=>sign('signIn')}> SignIn</p>
<p id="reg"  onClick={()=>sign('register')}>SignUp</p>
</Zoom>
</nav>
</div>




);




}
export default Navigation;
