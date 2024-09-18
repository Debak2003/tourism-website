// function debak()
//         {    
//             document.write("Your registeration is successful!!!");
//         }
   
        var a=document.getElementById("uname");
        var b=document.getElementById("pass"); 
function vali()
{
       if(a.value=='' || b.value=='')
       {
        alert("field cannot be empty");
        return false;
       }
       else{
        return true;
       }
}
       


  var a=document.getElementById("email");
  var b=document.getElementById("error");
  function hello()
  {
       let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
       if(regexp.test(email.value)){
        error.innerHTML="valid email ID";
        error.style.color="green";
        return true;
       }
       else{
        error.innerHTML="Invalid email ID";
        error.style.color="red";
        return false;
       }
}
