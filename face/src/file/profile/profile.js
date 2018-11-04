import React from 'react';
import Fade from 'react-reveal/Fade'



class  Profile extends React.Component{
  constructor(){
    super();
    this.state={
      img:''
    }
     this.handleUploadImage = this.handleUploadImage.bind(this);
  }


    handleUploadImage() {


      const data = new FormData();
      data.append('file', this.uploadInput.files[0]);



      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((data) => {
          this.setState({ img: `http://localhost:3001/${data.file}` });
          this.props.profile('profile');
        });
      });

    }


  render(){
    const {sign,nameChange,profile} = this.props
return(
<Fade top  cascade>
  <div id="box" style={{backgroundColor:'#DCDCDC'}}>
  <div>
<div id="ring" ></div>
  <img src={this.state.img}  style={{position:'absolute',top:200,left:300}}
  className="shadow-3 grow pointer"  id="image3">
  </img>

  <form>
      <div>
        <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
      </div>
      <div>

      </div>
      <br />
      <div>
        <div className="f3 bb shadow-3  bg-gold white pointer w-30 ph3 " onClick={this.handleUploadImage}>Click</div>

  </div>
  </form>
  </div>
  <p className="f2 white center ttu" style={{textAlign:'center',marginTop:430}} id="para">
  {nameChange}
</p>

  </div>
</Fade>



);
}




}
export default Profile;
