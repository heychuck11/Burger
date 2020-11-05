$(document).ready(function(){
  console.log("pageLoaded")
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("burger is eaten");
    console.log("burger devoured")
    var newBurgerState = {
      devour: eaten
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed burger to", eaten);
        
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()

    };
    console.log(newBurger)

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    console.log("burger deleted")
    
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        
        location.reload();
      }
    );
  });
});
