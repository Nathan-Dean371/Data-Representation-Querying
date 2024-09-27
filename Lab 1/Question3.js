const qArray = [ "Task 1", "Task 2", "Task 3"];


let addTask = (task) =>
{
    qArray.push(task);
    console.log("Pushed task: " + task + " onto the array.");
    return qArray.length;
}

let listAllTasks = () => 
{
    qArray.forEach((task) =>
    {
        console.log(task);
    });
}

let deleteTask = (task) =>
{
    if(qArray.includes(task))
    {
        console.log("Deleting " + task + " from array.");
        let taskIndex = qArray.indexOf(task);
        qArray.splice(taskIndex, 1);
        
    }
    else
    {
        console.log("Array does not contain " + task);
    }
}

addTask("Task 4");
console.log(qArray);
listAllTasks();
deleteTask("Task 2");
console.log(qArray);
deleteTask("Task 7");