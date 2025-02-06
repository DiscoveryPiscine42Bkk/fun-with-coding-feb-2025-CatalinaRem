// Load TO DO list from cookies when the page loads
window.onload = () => {
    const todoList = document.getElementById('ft_list');
    const tasks = getTasksFromCookie();
    
    if (tasks) {
        tasks.forEach(task => {
            addTaskToList(task);
        });
    }
};

// Add a new task
document.getElementById('new-task-btn').addEventListener('click', () => {
    const task = prompt('Enter your new TO DO:');
    if (task && task.trim() !== '') {
        addTaskToList(task);
        saveTasksToCookie();
    }
});

// Function to add a task to the list
function addTaskToList(task) {
    const todoList = document.getElementById('ft_list');
    const div = document.createElement('div');
    div.classList.add('todo-item');
    div.textContent = task;

    // When clicked, remove the task
    div.addEventListener('click', () => {
        if (confirm('Are you sure you want to remove this task?')) {
            div.remove();
            saveTasksToCookie();
        }
    });

    todoList.insertBefore(div, todoList.firstChild); // Place at the top of the list
}

// Function to save tasks to cookie
function saveTasksToCookie() {
    const todoList = document.getElementById('ft_list');
    const tasks = [];
    
    Array.from(todoList.children).forEach(item => {
        tasks.push(item.textContent);
    });
    
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/;`;
}

// Function to get tasks from cookie
function getTasksFromCookie() {
    const name = 'tasks=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return null;
}