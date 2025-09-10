const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
