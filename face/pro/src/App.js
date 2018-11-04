import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/nav';
import Face from './components/face';
import Logo from './components/logo';
import Form from './components/form';
import Rank from './components/rank';
import 'tachyons';
import './components/index.css'
import Particles from 'react-particles-js';
import './index.css'
import Login from './components/log';
import Register from './components/register';
//import './App.css';
const particle = {
            		"particles": {
    number: {
      value: 700,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#FFFF99"
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        opacity_min: 0.2,
        sync: true
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
      enable: true,
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
      straight: true,
      out_mode: "out",
      bounce: true,
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
      onclick: {
        enable: true,
        mode: "repulse"
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




             
const app = new Clarifai.App({
 apiKey: '9b55de5bb744477f8f11b18336ced432'
});
class App extends Component {
	constructor(){
		super();
		this.state={
			input:'',
			imgUrl:"",
			box:{},
			name:"",
      route: "signin",
      isSign:false
		}
	}

	celebrityFace=(data)=>{
     
     const param = data.outputs[0].data.regions[0].region_info.bounding_box;
     
     const Image = document.getElementById('imageDetect');
     const width = Number(Image.width);
     const height = Number(Image.height);
     console.log(width);

     return {
     	leftCol:param.left_col*width,
     	topRow:    param.top_row*height,
     	rightCol:  width-(param.right_col*width),
     	bottomRow:height-(param.bottom_row*height),
     
     }
	}	

	name=(name)=>{
		this.setState({name:name});

	}
	currentName=(data)=>{
	const name = data.outputs[0].data.regions[0].data.face.identity.concepts[0].name;
	return name;	
	}

	display=(box)=>{
		this.setState({box:box});


	}
    
    onInputChange=(event)=>{
           this.setState({'input':event.target.value});
           
    }
    onSubmit=()=>{
           this.setState({'imgUrl':this.state.input});
          app.models.predict("e466caa0619f444ab97497640cefc4dc", this.state.input)
          .then((response) =>{

          	this.display(this.celebrityFace(response))
          	this.name(this.currentName(response))


          })

    }





onRoutechange=(rout)=>{
  if(rout === "signout"){
    this.setState({isSign:false})


  }else if(rout==="home"){

    this.setState({isSign:true})
  }
  this.setState({route:rout});
}
  render() {
  
    return (
      <div className="App">
       <Particles className="particle"
              params={particle}
            />
       {
        this.state.route === "home" 
        ?
         <div>
         <Navigation onRoutechange={this.onRoutechange} isSign={this.state.isSign}/>
        <Logo/>
        <Rank name={this.state.name}/>
        <Form input={this.onInputChange} button={this.onSubmit}/>
        
        <Face img={this.state.imgUrl} box={this.state.box}/>
        </div>
      :(
      this.state.route ==="register" 
      ? <Register onRoutechange={this.onRoutechange}/>
      :
      
       <div>
      <Navigation onRoutechange={this.onRoutechange} isSign={this.state.isSign}/>
      <Login onRoutechange={this.onRoutechange}/>
      
      </div>
  ) 
    
      }
      </div>
    );
  }
}

export default App;
