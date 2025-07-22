const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');
const input = document.querySelector('.task');
const todoList = document.querySelector('.todo-list');

// Função para salvar lista no localStorage
function saveTasks() {
    // Pegamos todos os li e criamos um array de objetos {text, checked}
    const tasks = [];
    todoList.querySelectorAll('li').forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        const text = li.textContent.trim();
        tasks.push({
            text: text,
            checked: checkbox.checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar lista do localStorage
function loadTasks() {
    const tasksString = localStorage.getItem('tasks');
    if (!tasksString) return;

    const tasks = JSON.parse(tasksString);
    tasks.forEach(task => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'check-box';
        checkbox.checked = task.checked;

        const li = document.createElement('li');
        li.append(checkbox, ' ', task.text);
        todoList.appendChild(li);
    });
}

// Evento para adicionar tarefa
addBtn.addEventListener('click', () => {
    const taskDes = input.value.trim();
    if (!taskDes) return;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check-box';

    const li = document.createElement('li');
    li.append(checkbox, ' ', taskDes);
    todoList.appendChild(li);

    input.value = '';

    saveTasks(); // salva após adicionar
});

// Evento para remover tarefas marcadas
removeBtn.addEventListener('click', () => {
    const items = todoList.querySelectorAll('li');
    items.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            todoList.removeChild(item);
        }
    });
    saveTasks(); // salva após remover
});

// Ao carregar a página, carregar as tarefas do localStorage
window.addEventListener('load', loadTasks);
