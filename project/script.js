function addTask() {

    let input = document.getElementById("task");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete";

    completeBtn.onclick = function() {
        span.classList.toggle("done");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    let list = document.getElementById("taskList");
    list.appendChild(li);

    input.value = "";
}