import React from 'react';
import './face.css';
const Face = ({img,box})=>{
	return(
		
       <div style={{display:'flex',justifyContent:'center'}} className="ma">
      <div className="absolute mt2" >
      <img id="imageDetect" src={img} alt="This" width="500px" height="auto"/>
      <div id="bounding-box" style={{left:box.leftCol,right:box.rightCol,top:box.topRow,bottom:box.bottomRow}}>
      </div>
      </div>


      </div>
	

		);



}

export default Face;