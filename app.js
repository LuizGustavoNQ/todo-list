const btn = document.querySelector('.add-btn');

document.querySelector('.task').value = '';

btn.addEventListener('click', function addTask() {
    let taskDes = document.querySelector('.task').value.trim();

    if (taskDes === '') return;

    const todoList = document.querySelector('.todo-list');
    const newItem = document.createElement('li');

    newItem.textContent = taskDes;
    todoList.appendChild(newItem);

    // Limpa o campo após adicionar
    document.querySelector('.task').value = '';
});
