document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/d5f8568518cc487b80a457e8b07275a8/todo")
    .then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].todoData.isCompleted === false) {
          console.log();
          showTodoRemaining(res.data[i].todoData, res.data[i]._id);
        } else {
          showTodoDone(res.data[i].todoData, res.data[i]._id);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoData = {
    name: todoNameIn.value,
    description: todoDescriptionIn.value,
    isCompleted: false,
  };

  axios
    .post(
      "https://crudcrud.com/api/d5f8568518cc487b80a457e8b07275a8/todo",
      { todoData }
    )
    .then((result) => {
      console.log(result);
      createTodo(todoData);
      clearFields();
      reloadPage();
    })
    .catch((err) => {
      console.log(err);
    });

});

function clearFields() {
  todoNameIn.value = "";
  todoDescriptionIn.value = "";
}

function showTodoRemaining(todo, todoId) {
  createTodo(todo, todoId);
}

function showTodoDone(todo, todoId) {
  createTodo(todo, todoId);
}

function createTodo(todo, todoId) {
  const li = document.createElement("li");
  li.className = "list-items-group";
  const liTextNode = document.createTextNode(
    `${todo.name} - ${todo.description}`
  );

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "btn btn-success complete new-button";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger delete new-button";

  const divForButton = document.createElement("div");
  li.appendChild(liTextNode);

  completeBtn.addEventListener("click", () => {
    console.log(todoId);
    axios
      .put(
        `https://crudcrud.com/api/d5f8568518cc487b80a457e8b07275a8/todo/${todoId}`,
        {
          todoData: {
            name: todo.name,
            description: todo.description,
            isCompleted: true
          }
        }
      )
      .then((res) => {
        li.remove()
        completeBtn.remove()
        todoDoneUl.appendChild(li);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  deleteBtn.addEventListener("click", () => {
    axios
      .delete(
        `https://crudcrud.com/api/d5f8568518cc487b80a457e8b07275a8/todo/${todoId}`
      )
      .then((res) => {
        console.log(res);
        li.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (!todo.isCompleted) {
    divForButton.appendChild(completeBtn);
    divForButton.appendChild(deleteBtn);
    li.appendChild(divForButton);
    todoRemainingUl.appendChild(li);
  } else {
    divForButton.appendChild(deleteBtn);
    li.appendChild(divForButton);
    todoDoneUl.appendChild(li);
  }

}