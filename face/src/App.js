import React, { Component } from 'react';

import Navigation from './file/navigation/navigation';
import Main from './file/main/main';
import Sign from './file/sign/sign'
import Register from './file/register/register';
import Home from './file/home/home';
import Profile from './file/profile/profile.js';
import Timeline from './file/timeline/timeline.js';
import Friends from './file/friends/friends.js';
import Pic from './file/pic/pic.js';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
const particle = {
            		"particles": {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 3,
        color: "#fff"
      },
    image: {
    src: "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
    width: 100,
    height: 100
  }
},
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 50,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#FFFF00",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode:  "bubble"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 20,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 500,
        duration: 0.1
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true

}









class App extends Component {
  constructor(){
    super();
      this.state={
        route:'first',
        name:'',
        data:{}


    }
  }

  onRouteChange=(random)=>{
    this.setState({route:random});
  }
  onNameChange=(ram)=>{
    this.setState({name:ram});
  }

componentDidMount(){
var a = JSON.parse(sessionStorage.getItem('id'));
if(a){
  this.setState({route:'home'});
}else{
  this.setState({route:'first'});
}





}


  render() {

    return (
      <div>




      {

this.state.route === 'signIn'?


<div>
<Navigation sign={this.onRouteChange}/>
<Main/>
<Sign login={this.onRouteChange} onChange={this.onNameChange}/>

</div>

    :(this.state.route==='register'?
    <div>

    <Navigation sign={this.onRouteChange}/>
    <Main/>
    <Register register={this.onRouteChange}/>
    </div>
    :(this.state.route ==='home'?
<div>
    <Home home={this.onRouteChange} name={this.state.name}/>

    </div>
    :(this.state.route === 'timeline'?
    <div>

<Home home={this.onRouteChange} name={this.state.name}/>

<Timeline nameChange1={this.state.name}/>

</div>
:(this.state.route === 'about'?
<div>

<Home home={this.onRouteChange} name={this.state.name}/>

<Friends/>

</div>
:(this.state.route === 'profile'?
<div>
<Home home={this.onRouteChange} name={this.state.name}/>
<Profile nameChange={this.state.name} profile={this.onRouteChange} />
</div>
:
<div>
<Navigation sign={this.onRouteChange}/>
<Main/>
</div>

)

  )



)


  )
  )

}


      </div>

    );
  }
}

export default App;
