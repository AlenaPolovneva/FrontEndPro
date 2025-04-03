document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_container");
    const input = document.querySelector(".form_input");
    const todoList = document.querySelector(".todo-items");
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));
    const renderTodos = () => {
        todoList.innerHTML = ""; // Очищаємо список перед оновленням
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = todo.completed ? "todo_item_checked" : "todo_item";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.addEventListener("change", () => {
                todos[index].completed = checkbox.checked;
                saveTodos();
                renderTodos();
            });
            const span = document.createElement("span");
            span.className = "todo_span";
            span.textContent = todo.text;
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "todo_btn";
            deleteBtn.textContent = "Видалити";
            deleteBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });
            li.append(checkbox, span, deleteBtn);
            todoList.appendChild(li);
        });
    };
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            todos.push({ text, completed: false });
            saveTodos();
            renderTodos();
            input.value = "";
        }
    });
    renderTodos();
});
