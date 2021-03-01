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
     //giving feedback
$("button").click (function(mahan){
     var client = document.getElementById('nameDetail').value;
     alert('we have received your message' + 'feel free to reach out to us');
     mahan.preventDefault();
});
     // my form button
     
$("button").on('click', function (){
     $('form').each(function (){
       this.reset();
     });
});
