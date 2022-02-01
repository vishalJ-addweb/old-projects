var dec = document.getElementById('dec');
var inc = document.getElementById('inc');
var rst = document.getElementById('rst');
var ans = document.getElementById('num');

var number = 0;

inc.addEventListener('click', function(){
    number = number+1;
    ans.innerHTML=number;
    if(number%2==0)
    {
        ans.style.color='red';
    }else{
        ans.style.color='blue';
    }
})

dec.addEventListener('click', function(){
    number = number-1;
    ans.innerHTML=number;
    if(number%2==0)
    {
        ans.style.color='red';
    }else{
        ans.style.color='blue';
    }
})

rst.addEventListener('click', function(){
    number = 0;
    ans.innerHTML=number;
    ans.style.color='black';
})