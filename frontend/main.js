const apiUrl = '/api/todos';

async function fetchTasks() {
    const res = await fetch(apiUrl);
    const tasks = await res.json();
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text + (task.done ? 'done' : '');
        const delBtn = document.createElement('button');
        delBtn.textContent = '';
        delBtn.onclick = () => deleteTask(task.id);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (!text) return;

    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    input.value = '';
    await fetchTasks();
}
async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    await fetchTasks();
}

await fetchTasks();