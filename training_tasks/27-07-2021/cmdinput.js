var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Student_data = /** @class */ (function () {
    function Student_data(n, i, m) {
        this.Name = n;
        this.Id = i;
        this.Marks = m;
    }
    return Student_data;
}());
;
var arr = [];
var Show_values = function () {
    rl.question('Enter Name ', function (Name) {
        rl.question('Enter Id ', function (Id) {
            rl.question('Enter Marks ', function (Marks) {
                rl.question('Do You Want To Enter More Values? Y/N ', function (answer) {
                    if (answer == "n" || answer == "N") {
                        var obj = new Student_data(Name, Id, Marks);
                        arr.push(obj);
                        for (var a = 0; a < arr.length; a++) {
                            console.log("Name is : " + arr[a].Name);
                            console.log("Id is : " + arr[a].Id);
                            console.log("Marks is : " + arr[a].Marks);
                        }
                        rl.close();
                    }
                    else {
                        var obj = new Student_data(Name, Id, Marks);
                        arr.push(obj);
                        Show_values();
                    }
                });
            });
        });
    });
};
Show_values();
