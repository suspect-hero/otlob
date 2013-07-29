jQuery(function($){
  $(".icon-list").click(function(){
    alert("Should show a summary dialog");
  });

  $(".icon-edit-sign").click(function(){
    alert("Should show an order edit dialog");
  });

  $(".menu-item-add").click(function(){
    addItemToOrder();
  });

  $(".selected-item-remove").click(function(){
    alert("Should remove the item from the order");
  });

  $(".cancel-order").click(function(){
    alert("Should cancel the order");
  });

  $(".done-order").click(function(){
    alert("Should finalize the order");
  });

  $(".join-order").click(function(){
    alert("Should join the order");
  });

  $(".demit-order").click(function(){
    alert("Should demit the order");
  });

  $("#create-order-container button").click(function(){
    alert("Should create a new order");
  });

  $(".input-prepend button").click(function(){
      addItemToOrder();
  });

  $("#appended-input-name").keyup(function(e){
    if(e.keyCode == 13)
      addItemToOrder();
  });

  $("#restaurants-list .restaurant-thumb").click(function(){
    alert("Should set the restaurant");
  });
});

function addItemToOrder(){
  alert("Should add the menu item to the order");
}
