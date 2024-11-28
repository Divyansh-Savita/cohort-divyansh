let user={
    name:"divyansh",
    age:"21"
}
function greet(){
    console.log(`hello ${user.name} ur age is ${user.age}`);
    if(user.age>18){
        console.log("u r eligible to vote");
        
    }else{
        console.log("u r kid");
        
    }
}
// greet()

function arr(u){
    let arrr=[]
    for(let i=0;i<u.length;i++){
if(u[i]%2==0){
arrr.push(u[i])
}}
return arrr;
}
// console.log(arr([1,2,3,4,5,6]))

//filter approach

let arr1=[1,2,3,4,5,6]
let arr2=arr1.filter((even)=>even%2==0)
console.log(arr2);


function Vote(user){
    let adultUsr=[]
    for(let i=0;i<user.length;i++){
        if(user[i]>=18){
        adultUsr.push(user[i])
    }}
    return adultUsr
}
// console.log(Vote([3,5,23,6,78,54,2]));
let Age=[2,4,54,3,23,65,5]
let votingAge=Age.filter((votee)=>votee>=18)
console.log(votingAge);

let users=[
    {name:"ds",age:21,gender:"male"},
    {name:'appu',age:16,gender:"male"},
    {name:'neni',age:5,gender:"female"},
    {name:"anshu",age:18,gender:"male"},
    {name:"matange",age:19,gender:"female"}
]
let adult=users.filter((userss)=>userss.age>=18 && userss.gender=="male")
console.log(adult);
