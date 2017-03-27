$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("form").hide();

    var inputs = ["item0", "item1", "item2", "item3"];

    var sorted = inputs.map(function(input){
      return $("#" + input).val().toLowerCase();
    }).sort();

    var uppercase = sorted.map(function(input){
      return input.toUpperCase();
    });

    sorted.forEach(function(item) {
      $("#sorted-list").append("<li>"+item+"</li>");
    });

    uppercase.forEach(function(item){
      $("#uppercase-list").append("<li>"+item+"</li>");
    });

  });
});
