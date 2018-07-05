//Data (Model)
var taskListArray = [];

var taskForm = document.getElementById("taskForm");
var taskNameInput = document.getElementById("taskname");
var taskDescriptionInput = document.getElementById("taskdescription");
var taskDueDateInput = document.getElementById("taskduedate");
var saveTaskBtn = document.getElementById("saveTaskBtn");

var taskList = document.getElementById("taskList");
var editMode = false;
let selectedTask;

function createTaskId() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

//Templating (View)
function createTaskItem(task) {
  var li = document.createElement("li");

  li.innerHTML =
    "<p title='" +
    task.taskdescription +
    "'><b>" +
    task.taskname +
    " </b> <button type='button' onclick='removeTask(\"" +
    task.taskid +
    "\")'>X</button> &nbsp; <button type='button' onclick='selectTaskForEdit(\"" +
    task.taskid +
    "\")'>Edit</button> <br> <small>Due Date : " +
    moment(task.taskduedate).fromNow() +
    "</small></p>";

  return li;
} //createTaskItem

function updateList() {
  //Clear list
  taskList.innerHTML = null;

  taskListArray.forEach(function(task) {
    var item = createTaskItem(task);
    taskList.appendChild(item);
  });
} //updateList

//Commands (Controller)
function addTask() {
  var task = {
    taskid: createTaskId(),
    taskname: taskNameInput.value,
    taskdescription: taskDescriptionInput.value,
    taskduedate: taskDueDateInput.value
  };

  console.log(task);

  //Create Task Item
  taskListArray.push(task);
  //var taskItem = createTaskItem(task);

  //Add task to list
  //taskList.appendChild(taskItem);

  //Update tasks
  updateList();

  //Clear Form
  taskForm.reset();
} //addTask

function removeTask(taskId) {
  console.log(taskId);

  taskListArray = taskListArray.filter(function(task) {
    if (taskId != task.taskid) {
      return task;
    }
  });

  updateList();
} //removeTask

function selectTaskForEdit(taskId) {
  console.log(taskId);

  taskListArray.forEach(function(task) {
    if (task.taskid == taskId) {
      selectedTask = task;
    }
  });

  //set the form values
  taskNameInput.value = selectedTask.taskname;
  taskDescriptionInput.value = selectedTask.taskdescription;
  taskDueDateInput.value = selectedTask.taskduedate;

  editMode = true;
  saveTaskBtn.innerHTML = "Edit Task";
} //selectTaskForEdit

function editTask() {
  var updatedTask = {
    taskname: taskNameInput.value,
    taskdescription: taskDescriptionInput.value,
    taskduedate: taskDueDateInput.value
  };

  console.log(updatedTask);

  //Update the task
  taskListArray = taskListArray.map(function(task) {
    if (task.taskid == selectedTask.taskid) {
      updatedTask.taskid = selectedTask.taskid;

      return updatedTask;
    } else {
      return task;
    }
  });

  //Update tasks
  updateList();

  //Reset edit mode
  editMode = false;

  //Clear Form
  taskForm.reset();

  saveTaskBtn.innerHTML = "Add Task";
} //editTask

function saveTask() {
  if (editMode) {
    editTask();
  } else {
    addTask();
  }
} //saveTask
