import React from 'react';
import TextLoop from 'react-text-loop';
import Zoom from 'react-reveal/Zoom';
import "./main.css";

const Main =()=>{
return(

<div id="textloop" className="w-1 h-10 f2 pa3 i" >

<Zoom left cascade><span id="loop"
className="f2  hover-gold gold grow  pointer "
style={{color:'white'}}>Feel YourSelf</span></Zoom> <TextLoop
fade={true} mask={false}
springConfig={{ stiffness: 100, damping: 5 }}>
<span style={{color:'gold'}}>Stronger</span>


<span style={{color:'red'}}>Independent</span>
<span style={{color:'yellow'}}>Superior</span></TextLoop>
</div>




);




}
export default Main;
