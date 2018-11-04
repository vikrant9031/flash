
  var a;
  function log(){
  fetch('http://localhost:3001/upload').then(data=>{
    a = data;
    console.log(data);
  })
}
log()

export default log;
