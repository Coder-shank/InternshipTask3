const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");


addBtn.addEventListener("click", function () {
    const value = input.value.trim();

    if (value === "") return; 

   
    const emptyItem = document.querySelector(".empty");
    if (emptyItem) emptyItem.remove();

   
    const li = document.createElement("li");

    
    const span = document.createElement("span");
    span.textContent = value;

   
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.cursor = "pointer";

    
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);

    
    input.value = "";
});

// Delete task
list.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();

       
        if (list.children.length === 0) {
            const empty = document.createElement("li");
            empty.classList.add("empty");
            empty.textContent = "No tasks yet";
            list.appendChild(empty);
        }
    }
});
