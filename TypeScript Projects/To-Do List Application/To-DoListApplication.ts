class TodoList {
    private tasks: string[] = [];

    addTask(task: string) {
        this.tasks.push(task);
        console.log(`Added: ${task}`);
    }

    removeTask(task: string) {
        this.tasks = this.tasks.filter(t => t !== task);
        console.log(`Removed: ${task}`);
    }

    showTasks() {
        console.log("Tasks:", this.tasks.join(", "));
    }
}

const myTodos = new TodoList();
myTodos.addTask("Learn TypeScript");
myTodos.addTask("Practice DSA");
myTodos.showTasks();
myTodos.removeTask("Learn TypeScript");
myTodos.showTasks();
