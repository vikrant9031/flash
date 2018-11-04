import React from 'react'


class Pic extends React.Component{

constructor(){
	super();
    this.state={
     file:''
    }



	
}

onchange(event){
	this.setState({file:event.target.files[0]})
	console.log(this.state);
}

render(){

	return(
<form action="" method="" enctype="multipart/form-data">
	<input type="file" name="file" onChange={this.onchange}/>
	<input type="submit" name="submit"/>
</form>
		);
}

}
export default Pic;