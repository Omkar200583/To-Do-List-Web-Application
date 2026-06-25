const input = document.getElementById("todo");
const submit = document.getElementById("submit");
const todoList = document.getElementById("todoList");

submit.addEventListener("click", function () {
    const todoText = input.value.trim();

    if (todoText === "") {
        alert("Please enter a todo!");
        return;
    }

    
    const li = document.createElement("li");
    li.innerText = todoText;


    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
});
