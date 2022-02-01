function checkpass() {
    if (document.myForm.pass.value != document.myForm.cpass.value) {
        var msg="password did not match";        
        document.getElementById("errcpass").innerHTML=msg; 
        // alert("Confirm Password does not match with password");
        // document.myForm.cpass.focus(); 
        // document.myForm.cpass.blur();
    }else{
        document.getElementById("errcpass").innerHTML="";
    }
}

function success()
{
    alert("Data submitted successfully");
}