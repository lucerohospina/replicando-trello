$(document).ready(function() {
  var $addList = $('#add-list');
  
  function starList() {
    $addList.on('click', function() {
      console.log('click 1');
      $addList.remove();
      $('#form').append('<input type="text" class="add-focus" id="list-name" placeholder="Añadir una lista"><p class="lead"><button type="button" class="btn btn-success" id="save-list">Guardar</button></p>');
      $('.add-focus').focus();

      var $saveList = $('#save-list');
      var $listName = $('#list-name');
      
      $saveList.on('click', function() {
        console.log('click');
        $saveList.hide();
        $('#form').append('<p id="add-task">Añadir una tarea</p>');

        var $addTask = $('#add-task');

        $addTask.on('click', function() {
          console.log('click 3');
          $addTask.hide();
          $('#form').append('<input type="text" class="add-focus"><p class="lead"><button type="button" class="btn btn-success add-task-btn">Añadir</button></p>');
          $('.add-focus').focus();

          var $taskBtn = $('.add-task-btn');

          $taskBtn.on('click', function() {
            console.log('click 4');
          });
        });
      });
    });
  }

  starList();
});
