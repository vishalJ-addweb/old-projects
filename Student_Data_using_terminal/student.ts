const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class data {
    id;
    Name;
    Marks;
    constructor(i, n, m) {
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
};
var arr=[];

var getData = function () {

    rl.question('Enter ID : ', (id) => {
        rl.question('Enter Name : ', (Name) => {
            rl.question('Enter Marks : ', (Marks) => {
                rl.question('Do You Want To Enter More Values? Y/N : ', (choice) => {

                    if (choice == "n" || choice == "N") {
                        var obj = new data(id, Name, Marks);
                        arr.push(obj);

                        for(let i=0;i<arr.length;i++)
                        {
                            console.log(`Student ID is : ${arr[i].id}`);
                            console.log(`Student NAME is : ${arr[i].Name}`);
                            console.log(`Student MARKS is : ${arr[i].Marks}`);
                        }
                        rl.close();
                    }
                    else {
                        
                        var obj = new data(id, Name, Marks);
                        arr.push(obj);
                        getData();
                    }
                });
            });
        });
    });
};

getData();