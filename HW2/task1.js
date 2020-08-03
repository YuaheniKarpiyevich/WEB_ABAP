var user = prompt("Enter User Name", "Yauheni");
var res = "";

if (/\d/.test(user)) 
{ 
    res = user.toUpperCase();
} 
else 
{
    res = user.split("").reverse().join("");
}

alert(res);