const outerFun = (a) => {
    let b=10;

    const innerFun = () =>{
        let sum = a+b;
        console.log(sum);
    }
    return innerFun;
}

const result = outerFun(10);
// result();
console.dir(result); 