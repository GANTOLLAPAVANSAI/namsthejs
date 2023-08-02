const arr=[
    {type:"fruit", name:"apple"},
    {type:"veg", name:"bittergaurd"},
    {type:"fruit", name:"orange"},
    {type:"veg",name:"beans"}
]
function fil(n){
    return n.type==="veg";
}
const out=arr.filter(fil);
console.log(out);