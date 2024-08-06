const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
const date= document.querySelector('#date')
setInterval(function () {
  let date = new Date();
  
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
 
}, 1000);
setInterval(function(){
  let time= new Date();
  date.innerHTML= time.toLocaleDateString();
},1000);
