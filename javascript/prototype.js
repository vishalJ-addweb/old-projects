console.log("This is Javascript tutorials");

//object literal : Object.prototype
let obj = {
    name:"Vishal",
    channel:"VJ",
    address:"Mansarovar"
}
// console.log(obj);


function hell(givenName){
    this.name=givenName;
}

hell.prototype.getName = function (){
    return this.name;
}

hell.prototype.setName = function (newName){
    this.name =newName;
}

let obj2  =new hell("Mayank");
console.log(obj2);