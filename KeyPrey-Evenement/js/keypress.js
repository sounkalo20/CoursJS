let max = 180;

$(document).ready(function () {
  $("#message").keydown(function (e) {
    $("#lastKey").text("le code asii de la derniere lettre est " + e.which);
    if(e.which==8){
      if(max<180){
          $("#charactersLeft").text(++max + " caracteres"); 
      }
    }else{
      if(max>0){
        $("#charactersLeft").text(--max + " caracteres");
      }
    }
    
  });
});
