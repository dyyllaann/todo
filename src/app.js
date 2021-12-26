import importData from "./Storage.js";

function createMainContainer() {
  // Create main TASKS section
  var main = document.createElement("div");
  main.classList.add("main-container");
  main.id = "main";
  content.appendChild(main);
}

function createMain() {
  // Add "Tasks" title DIV
  var titleDiv = document.createElement("div");
  titleDiv.classList.add("main");
  {
    var mainTitle = document.createElement("h3");
    mainTitle.innerText = "Tasks";
    titleDiv.appendChild(mainTitle);
  }
  main.appendChild(titleDiv);

  // Add taskList section
  var taskList = document.createElement("div");
  taskList.classList.add("main");
  taskList.id = "task-list";
  main.appendChild(taskList);

  // Add "Add Task" button div
  var taskButtonDiv = document.createElement("div");
  taskButtonDiv.classList.add("main");
  {
    var addTaskButton = document.createElement("li");
    addTaskButton.id = "task-button";
    addTaskButton.innerText = "Add Task";

    taskButtonDiv.appendChild(addTaskButton);

    // Add icon
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<i class="material-icons-outlined">add_task</i>'
    );
  }
  main.appendChild(taskButtonDiv);
}

function populateMain() {
  var taskList = document.getElementById("task-list");
  var todoList = importData()[2].todos;

  for (var item in todoList) {
    // Create li
    var li = document.createElement("li");

    // Create dl
    var dl = document.createElement("dl");
    li.appendChild(dl);

    // Create dt
    var dt = document.createElement("dt");
    dt.innerText = todoList[item].title;
    dl.appendChild(dt);

    // Create dd (if any)
    for (var detail in todoList[item].details) {
      var dd = document.createElement("dd");
      dd.innerText = todoList[item].details[detail];
      dl.appendChild(dd);
    }

    taskList.appendChild(li);
  }
}

export default function app() {
  createMainContainer();
  createMain();
  populateMain();
}