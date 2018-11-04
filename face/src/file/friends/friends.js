import React from 'react';
import Fade from 'react-reveal/Fade';
import "./friends.css";


class Friends extends React.Component{
  constructor(){
    super();
    this.state={

      data:[],

    }

  }



  componentDidMount=()=>{
     fetch('http://localhost:3001/res').then(response=>response.json()).then(data=>{
       this.setState({data:data});

     })
  }
render(){

  return(
<div  id="box" >
    <div id="sec">
    {
      this.state.data.map((user,i)=>{
        return(
        <li><span id="name1">{user.name}</span><div id="but">ADD</div></li>

      )
      })
    }
    </div>
    </div>
  );

}
}
export default Friends;
