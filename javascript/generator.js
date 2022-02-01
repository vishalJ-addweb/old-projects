//Generatots
// function* gen()
// {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
// }
// const value = gen();
// console.log(value.next());
// console.log(value.next().value);










// Map,Filter,Reduce 
// const arr=[5,1,3,2,6];
// const out= arr.map( (x)=>{
//     return x*2;
// })

// const out = arr.map((x) =>{
//     return x*2;
// })

// const out = arr.filter((x) =>{
//     return x%2;
// })

// const out=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(out);






//Promises
// const pob1 = new Promise((res,rej)=>{
//     let x=0;
//     setTimeout(()=>{
//         if(x==0){
//             res("code resolved");
//         }else{
//             rej("code rejected");
//         }
//     },5000)
// })
// pob1.then((result)=>{
//     console.log(result);
// }).catch((errors)=>{
//     console.log(errors);
// })






//Collection or sets
// let mySet = new Set();
let mySet = new Set([1,2,3,4,5]);
mySet.add(10);
mySet.forEach((val)=>{
    console.log(val);
});






//ForEach
// const arr=[1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val);
// })