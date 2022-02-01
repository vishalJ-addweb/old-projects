//Normal Function
// var x=10;
// function add()
// {
//     console.log(x);
//     x++;
// }
// add();
// add();
// console.log(x);



//Pure Function
var x=10;
function add(x)
{
    console.log(x+1);
    return x+1;
}
add(10);
console.log(x);

