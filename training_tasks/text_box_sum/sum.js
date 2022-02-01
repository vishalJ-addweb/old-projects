const express =require("express");
const app=express();

app.get("/",function(request,response){
    response.sendFile(__dirname+"/sumofnum.html");
});
app.get("/getsum", function(request,response){
    var num1=parseInt(request.query.num1);
    var num2=parseInt(request.query.num2);

    var sum=num1+num2;
    response.send("Sum of Entered No is : "+sum);
});
app.listen(3001);

console.log("check at http://localhost:3001");