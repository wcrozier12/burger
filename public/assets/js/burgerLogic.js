$(function() {

  $('#addBurg').on('click', function() {
    $('#burgName').empty();
  });

  $('#submitBurg').on('click', function(event) {
    if (!$('#burgName').val()) {
      return;
    }
    event.preventDefault();
    let newBurger = {
      name: $('#burgName').val()
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(data) {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.change-devoured').on('click', function(event) {
    event.preventDefault();
    let id = $(this).data('id');

    let readyToEat = {
      status: $(this).data('readytoeat')
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: readyToEat
    }).then(
      function(data) {
        console.log('Devoured burger');
        location.reload();
      }
    );
    
  })
});


