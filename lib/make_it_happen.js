$l( () => {

  $l('.todo-form').on('submit', (e)=>{
    e.preventDefault();
    addTodoItem();
  });

  $l('.add-to-do-button').on('click', (e)=>{
    e.preventDefault();
    addToDo();
  });

  const addToDo = () => {
    if ($l('.to-do-input').val()){
      let toDo = $l('.to-do-input').val();
      let newToDo = $l('.to-do-list').append(`<li class="to-do-item">${toDo}</li>`);
      $l('.to-do-input').val('');
    }
  };

});
