import React from 'react';
import TextLoop from 'react-text-loop';
import Fade from 'react-reveal/Fade';






class Home extends React.Component{
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
      const {home,name} = this.props;
return(

<div className=" f3 w-100" id="container" style={{display:'flex',flexWrap:'wrap'}} >
<div id="image" className="hide-child prop"
style={{height:100,position:'fixed',top:5,left:10,borderRadius:50}}>
<img style={{borderRadius:50,height:100}} className="grow ba b--white prop"
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Tcg5HTKp9IRjr41RPxBslo02sGNRLueFcvDli6bk-aocY_a1aA"></img>

<div className="child fixed mh3">
<div className="f3 white outline mb3 mt3 bg-gold pointer dim">Friends</div>
<div className="f3 white outline mb3 bg-green pointer dim">Messages</div>
<div className="f3 white outline mb3 bg-red pointer dim">Notifications</div>
<div className="f3 white outline mb3 bg-blue pointer dim">Logout</div>

</div>

 </div>

<article className= "wood bg-transparent center ba"  id="article" >

<nav className="bg-white bar o-100 f3 ">
<div className="timeline ph0 w-100 link pointer grow hover-gold " onClick={()=>home('timeline')}>Timeline</div>
<div className="link pointer grow hover-gold " onClick={()=>home('about')}>Friends</div>
<div className="link pointer grow hover-gold " onClick={()=>home('profile')}>Profile</div>
</nav>

<main className="text"><TextLoop springConfig={{ stiffness: 500, damping: 100 } } fade={true} spee={400}>
<sapn className="center white f2 bb ">Welcome {name}</sapn>
<sapn className="center f2 green bb">Have a nice day!</sapn>
</TextLoop></main>
</article>

</div>

);



}
}
export default Home;
