$(document).ready(function() {
  $(".btn").on("click", addItem);
  $(".link-delete").on("click", deleteItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// counter at the top of the screen.
function addItem() {
  var text = window.prompt("Submit Event Info for a Quote");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length;
  $(".total").html(numItems + " items");

  if (numItems ==1 ) {
    $(".total").html(numItems + " item");
  }
else {
  $(".total").html(numItems + "items");
}
}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();

}
