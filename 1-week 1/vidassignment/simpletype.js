function sum(a,b){
    return a+b;
}
// console.log(sum(4,5));
function canVOte(n){
    if (n>18) {
        return true
    }else{
        return false
    }
}
// console.log(canVOte(8));

// let jignesh=15
// if(jignesh%2==0){
//     console.log('it is even');    
// }else{
//     console.log("it is odd");
    
// }

function sumToN(N){
    let yuhu=0;
    for(let i=0;i<N;i++){
        yuhu= yuhu+i;
        console.log(yuhu);
        
    }
    return yuhu;
}
console.log(sumToN(10));
