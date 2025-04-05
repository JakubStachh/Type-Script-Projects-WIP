# 📝 TodoList Class Implementation

## 📚 Description
The `TodoList` class represents a basic todo list where you can add tasks, remove tasks, and view the current list of tasks.

---

## 📐 Methods

1. **addTask(task: string)**: Adds a new task to the list and logs the addition.
2. **removeTask(task: string)**: Removes a task from the list and logs the removal.
3. **showTasks()**: Displays the current list of tasks in the console.

---

## ✅ Code

```typescript
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
myTodos.showTasks();   // Output: Tasks: Learn TypeScript, Practice DSA
myTodos.removeTask("Learn TypeScript");
myTodos.showTasks();   // Output: Tasks: Practice DSA
``` 
## 🧪 Example Output
```
Added: Learn TypeScript
Added: Practice DSA
Tasks: Learn TypeScript, Practice DSA
Removed: Learn TypeScript
Tasks: Practice DSA
```
