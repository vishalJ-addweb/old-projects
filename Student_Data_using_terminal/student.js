var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var data = /** @class */ (function () {
    function data(i, n, m) {
        this.id = i;
        this.Name = n;
        this.Marks = m;
    }
    return data;
}());
;
var arr = [];
var getData = function () {
    rl.question('Enter ID : ', function (id) {
        rl.question('Enter Name : ', function (Name) {
            rl.question('Enter Marks : ', function (Marks) {
                rl.question('Do You Want To Enter More Values? Y/N : ', function (choice) {
                    if (choice == "n" || choice == "N") {
                        var obj = new data(id, Name, Marks);
                        arr.push(obj);
                        for (var i = 0; i < arr.length; i++) {
                            console.log("Student ID is : " + arr[i].id);
                            console.log("Student NAME is : " + arr[i].Name);
                            console.log("Student MARKS is : " + arr[i].Marks);
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
