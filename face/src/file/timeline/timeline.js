import React from 'react';
import Fade from 'react-reveal/Fade';
import 'font-awesome/css/font-awesome.min.css';
import './timeline.css';
import Function from './time';
class Timeline extends React.Component{
  constructor(){
    super();
    this.state={
      img:'',
      data:[],
      count:[]
    }
this.handleUploadImage = this.handleUploadImage.bind(this);

  }
onFind=()=>{
  var a = document.getElementById('file');
  var b = document.getElementById('log');

  a.style.display = "block";
  b.style.color = "green";

}

change=()=>{

fetch('http://localhost:3001/get').then((response)=>response.json()).then(data=>{

  this.setState({data:data});


});

// fetch('http://localhost:3001/count').then(response)=>response.json()).then(data=>{
//   this.setState({count:data});
// })
}


componentDidMount=()=>{
setInterval(this.change,500);





}






handleUploadImage() {

  var a = document.getElementById('file');
  var b = document.getElementById('log');
var c = document.getElementById('comment').value;
var d = document.getElementById('text');

  const data = new FormData();
  data.append('file', this.uploadInput.files[0]);
  data.append('filename', c);
  data.append('uid',sessionStorage.getItem('id'));
console.log(data.uid);


  fetch('http://localhost:3001/post', {
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((data) => {
      this.setState({ img: `http://localhost:3001/${data.file}` });
      if(this.state.img){
        b.innerHTML= "uploaded";

      }
d.innerHTML = data.value;



    });
    a.style.display = "none";
    b.style.color = "white";




  });

}

onLike=(event)=>{
  var a = document.getElementById('like');

  const data = new FormData();
  data.append("conid",event.target.id);
  data.append("likebyid",sessionStorage.getItem('id'));
  console.log(data.conid);
  console.log(data.likebyid);
  fetch('http://localhost:3001/like', {
    method: 'POST',
    body:data

  }).then(response=>response.json()).then(data=>{
if(!(data==="error")){
  fetch('http://localhost:3001/likes');

}
  });



}






render(){

  const {sign,nameChange1} = this.props;
  if(this.state.data.length ===0){
    return <div style=
    {{"position":"absolute","top":400,"left":650,"color":"green","fontSize":100}}>
    <i className="fa fa-spinner fa-spin"></i>
    </div>
  }else{
return(


<div id="box" >
<div id="post">
<textarea id="comment" name="comment" placeholder="Add Post"
class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
aria-describedby="comment-desc">

</textarea>
<i  className="fa fa-camera-retro" id="tag" onClick={this.onFind}
></i>
<input ref={(ref) => { this.uploadInput = ref; }} type="file" id="file" />
<div className="button" id="button" onClick={this.handleUploadImage}>Post</div>
</div>
<div id="box1">

{
  this.state.data.map((user,i)=>{
    var name =`http://localhost:3001/${user.img}`;
i = user.cid;
return(
<div id="relative">

  <div class="item  shadow-3 bg-white" id="box2">

  <img id="image2"
   src={name}
  className="item1"></img>
  <div id="text4">{user.des}</div>
  <div>
  <div id={user.cid} onClick={this.onLike} className="like">Like</div>
  <div id="likes">{user.likes+" likes"}</div>
  </div>
</div>
  </div>

)
})
}
</div>

  })



</div>




);
}
}



}
export default Timeline;
