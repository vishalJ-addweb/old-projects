var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.showData = function () {
        var i = 1;
        do {
            var sid = prompt('Enter Student ID: ');
            var sname = prompt('Enter Student Name: ');
            var smarks = prompt('Enter Student Marks: ');
            var option = prompt('Do you want to continue? Press "Ok" for Yes and Press "Cancel" for No');
            var stdata = document.getElementById('data');
            var lineID = document.createElement('div');
            lineID.setAttribute('id', 'Id' + i);
            stdata.appendChild(lineID);
            var lineNAME = document.createElement('div');
            lineNAME.setAttribute('id', 'Name' + i);
            stdata.appendChild(lineNAME);
            var lineMARKS = document.createElement('div');
            lineMARKS.setAttribute('id', 'Marks' + i);
            stdata.appendChild(lineMARKS);
            document.getElementById('Id' + i).innerHTML = "Id: " + sid;
            document.getElementById('Name' + i).innerHTML = "Name: " + sname;
            document.getElementById('Marks' + i).innerHTML = "Marks: " + smarks;
            i++;
        } while (option == 'y');
    };
    return Student;
}());
window.onload = function () {
    var button = document.getElementById("btn");
    button.onclick = function () {
        var obj = new Student();
        obj.showData();
    };
};
