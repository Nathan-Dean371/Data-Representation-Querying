const qArray = [ "Task 1", "Task 2", "Task 3"];


let addTask = (task) =>
{
    qArray.push(task);
    console.log("Pushed task: " + task + " onto the array.");
    return qArray.length;
}

let listAllTasks = () => qArray.forEach((task) =>
{
 console.log(task);
})

addTask("Task 4");
listAllTasks();