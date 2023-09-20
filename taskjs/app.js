const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerText = taskText;

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    taskList.appendChild(listItem);

    taskInput.value = "";
}
