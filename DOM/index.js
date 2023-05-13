const taskContainer = document.getElementById("task-container");
const addButton = document.querySelector(".add");
const taskInput = document.getElementById("task-input");

addButton.addEventListener("click", ()=> {

    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    const checkButton = document.createElement('button');
    checkButton.classList.add("check-button");
    checkButton.innerHTML = '<span class="checked">✅</span>';
    task.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<span class="x">❌</span>';
    task.appendChild(deleteButton);

    if (taskInput.value != "") {
        taskContainer.appendChild(task);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }

    checkButton.addEventListener("click", () => {
        checkButton.classList.add("check-button-done");
        li.style.textDecoration = "line-through";
    })

    deleteButton.addEventListener("click",() => {
        task.remove();
    })
})


