let max = 180;

$(document).ready(function () {
  $("#message").keydown(function (e) {
    if(e.which!=8){
      maxL(this,180);
    }
    clavier(e);
  });
});

function maxL(element, max){
  value = element.value;
  max = parseInt(max);
  if(value.length > max){
      element.value = value.substr(0, max);
      $("section").addClass("active");
      $(".close-btn").click(function (e) { 
        $("section").removeClass("active");
      });
  }
}

function clavier(event){
  $("#lastKey").text("le code asii de la derniere lettre est " + event.which);
if(event.which==8){
  if(max<180){
      $("#charactersLeft").text(++max + " caracteres"); 
  }
}else{
  if(max>0){
    $("#charactersLeft").text(--max + " caracteres");
  }
}
}