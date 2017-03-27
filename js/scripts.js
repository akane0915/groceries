$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("form").hide();

    var inputs = ["item0", "item1", "item2", "item3"];

    var unsorted = inputs.map(function(input){
      return $("#" + input).val().toLowerCase();
    });

    unsorted.forEach(function(item) {
      $("#unsorted-list").append("<li>"+item+"</li>");
    });

  });
});
