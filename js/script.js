$(document).ready(function(){
    $("#devimage").click(function(){
        $("#dev").show();
        $("#devimage").hide();
    });
          $("#dev").click(function(){
        $("#devimage").show();
        $("#dev").hide();
    })});
$(document).ready(function(){
    $("#productimage").click(function(){
        $("#product").show();
        $("#productimage").hide();
    });
          $("#product").click(function(){
        $("#productimage").show();
        $("#product").hide();
    })});
$("document").ready(function(){
    $("#designimage").click(function(){
       $("#design").show();
       $("#designimage").hide();
    });  
    $("#design").click(function(){
        $("#designimage").show();
        $("#design").hide();
     })});
 function submit(){
     var name = document.getElementById("name").value;
     var message = document.getElementById("message").value;
     var email = document.getElementById("email").value;
     if(name,message,email == ''){
         alert("make sure all field are filled");
     } else{
         alert("Thank you for contacting us, we have received your message" + '');
     }
 };