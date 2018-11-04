import React from 'react';
import './face.css';
const Form = ({input,button})=>{
	return(
     <div style={{marginLeft:200}}>
     <p className="f3" style={{paddingLeft:200}}>
       {'This is a face detection app.give it a try!!'}

     </p>
     <div style={{display:'flex',justifyContent:'center'}}>
     <div className="form pa4 br3 shadow-5">
     <input type="tex" className="f4 pa2 w-70 center" onChange={input}/ >
     <button className="w-30 grow f4 link ph3 pv2 dib white bg-purple" onClick={button}>Detect</button>
     </div>
     </div>
     


     </div>
		

)


}

export default Form;