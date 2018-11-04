import React from 'react';
import './face.css';
const Rank= ({name})=>{
	return(
<div className="center" style={{marginTop:40}}>
<div className="white f3 " style={{marginLeft:-200}}>
{'Your Hollywood Celebrity is....'}
</div>
<div className="yellow f1 ma4" style={{marginLeft:-200}}>
{name}
</div>
</div>
		)
}

export default Rank;