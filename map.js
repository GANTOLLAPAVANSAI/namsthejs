const arr=[1,2,3,4,5,6];
const outarr=arr.map(binary)
function double(i){
    return i*2;
}
console.log(outarr);

function binary(i){
    return i.toString(2);
}