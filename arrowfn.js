// this is function declartion
// function doubleIt(num){
//     return num*2;
// }
// function expression
// const doubleIt=function(num){
//     return num*2;
// }
// arrow function
const doubleIt=num=>num*2;
// double paramiter
const add=(x,y)=>x+y;
// without paramiter syntex
const func=()=>'this is a arrow function';
console.log(func())
const result2=add(32,45);
console.log(result2)
const result=doubleIt(45);
console.log(result);
// this is big function
const doMath=(a,b)=>{
    const sum=a + b;
    const sub=a - b;
    const result=sum*sub;
    return result
}
const mathResult=doMath(44,33);
console.log(mathResult)