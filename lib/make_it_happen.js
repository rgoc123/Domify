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
      let newToDo = $l('.to-do-list').append(`
        <li class="to-do-item">
          <span>${toDo}</span>
        </li>`);
      $l('.to-do-input').val('');
      addDeleteToItems();
    }
  };

  const addDeleteToItems = () => {
    $l('.delete').on('click', (e)=> {
      $l(e.target).parent().remove();
      console.log($l(e.target).parent().parent());
      console.log($l(e.target).parent());
      console.log($l(e.target));
      console.log((e.target));
      console.log("This works");
    });
  };

});
