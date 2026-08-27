let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {

    if (input.value === "") {
        alert("Enter a task");
    } else {

        let li = document.createElement("li");
        li.innerText = input.value;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        li.append(deleteButton);
        taskList.append(li);

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        input.value = "";
    }
});