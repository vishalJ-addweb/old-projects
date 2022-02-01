const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Student_data{
  
    Name;
    Id;
    Marks;
    constructor(n,i,m){
       
        this.Name = n;
        this.Id = i;
        this.Marks = m;
    }
   // show_data(){
       // console.log(`Name is ${this.Name}`);
        //console.log(`Id is ${this.Id}`);
        //console.log(`Marks is ${this.Marks}`);  
    //}
};
var arr=[];


var Show_values = function(){

rl.question('Enter Name ', (Name) => {
rl.question('Enter Id ', (Id) => {
rl.question('Enter Marks ', (Marks) => {
rl.question('Do You Want To Enter More Values? Y/N ', (answer) =>{

        if (answer == "n" || answer == "N"){
             var obj = new Student_data(Name,Id,Marks);
                arr.push(obj);

                for (let a=0; a<arr.length;a++){
                    console.log(`Name is : ${arr[a].Name}`);
                    console.log(`Id is : ${arr[a].Id}`);
                    console.log(`Marks is : ${arr[a].Marks}`);

                }
                     rl.close();
                }
        else
        {
              var obj = new Student_data(Name,Id,Marks);
                 arr.push(obj);
                 
                    Show_values();
                }
        });
    });
});
});
};

Show_values();