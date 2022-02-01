class Student {
    showData() {
        var i = 1;
        do {

            var sid = prompt('Enter Student ID: ');
            var sname = prompt('Enter Student Name: ');
            var smarks = prompt('Enter Student Marks: ');
            var option = prompt('Do you want to continue? Press "Ok" for Yes and Press "Cancel" for No');

            const stdata = document.getElementById('data');

            const lineID = document.createElement('div');
            lineID.setAttribute('id', 'Id' + i);
            stdata.appendChild(lineID);

            const lineNAME = document.createElement('div');
            lineNAME.setAttribute('id', 'Name' + i);
            stdata.appendChild(lineNAME);

            const lineMARKS = document.createElement('div');
            lineMARKS.setAttribute('id', 'Marks' + i);
            stdata.appendChild(lineMARKS);


            document.getElementById('Id' + i).innerHTML = "Id: " + sid;
            document.getElementById('Name' + i).innerHTML = "Name: " + sname;
            document.getElementById('Marks' + i).innerHTML = "Marks: " + smarks;
            i++;
        } while (option == 'y')

    }
}
window.onload = () => {
    var button = <HTMLButtonElement>document.getElementById("btn");
    button.onclick = function () {
        var obj = new Student();
        obj.showData();
    }
};