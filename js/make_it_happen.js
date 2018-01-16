import Domify from "../lib/domify_main.js";

const todoButton = $l("#add-to-do-button");

todoButton.on("click", () => {
  const newToDo = $l("input");
  const userVal = newToDo.htmlElements[0].value;
  const newLi = $l("<li>");
  const todoList = $l(".to-do-list");
  newLi.html(userVal);
  todoList.append(newLi);
});
