import importData from "./Storage.js";

function createMain() {
  // Create main TASKS section
  var main = document.createElement("div");
  main.classList.add("main");
  main.id = "main";
  content.appendChild(main);

  // Add TO-DOS title
  var mainTitle = document.createElement("h3");
  mainTitle.innerText = "Tasks";
  main.append(mainTitle);
}

function populateMain() {
  var main = document.getElementById("main");
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

    main.appendChild(li);
  }

  var addTaskButton = document.createElement("li");
  addTaskButton.id = "task-button";
  addTaskButton.innerText = "Add Task";
  main.appendChild(addTaskButton);
    addTaskButton.insertAdjacentHTML(
      "afterbegin",
      '<span class="material-icons-outlined">add_task</span>'
    );
}

export default function app() {
  createMain();
  populateMain();
}