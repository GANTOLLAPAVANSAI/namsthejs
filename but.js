function attach(){
    var count=1;
    document.getElementById("clickMe").addEventListener('click', function m(){
    console.log("Clicked",count++)
});
}
attach();
 