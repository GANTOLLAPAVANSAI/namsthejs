//what is a callback function
setTimeout(function() {
    console.log("timer")
},10000);
function x(y){
  console.log("x")
  console.log(y)
}
x(function y(){
    console.log("y")
})
