$(document).ready(function(){
   let name= $("#name").val();
   $("#change").click(
    function(){

        $("#avatar").attr("src","https://joesch.moe/api/v1/" + name);
        // $("#name").val('');
    }
   )
   
   $("#reset").click(
    function(){

        $("#avatar").attr("src","fraud2.png");
        $("#name").val('');
    }
   )
})
